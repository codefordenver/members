import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import withEditPage from '../../utils/withEditPage';
import MemberProfile from './MemberProfile';
import AuthenticationContext from '../../utils/authentication/authContext';

const updateUserQuery = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $githubName: String
    $flowdockName: String
    $description: String
    $skillsIds: [ID!]
  ) {
    updateUser(
      id: $id
      name: $name
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
      skillsIds: $skillsIds
    ) {
      id
      name
      picture
      email
      flowdockName
      githubName
      description
      skills {
        id
        name
      }
    }
  }
`;

function prepUserForUpdate(updatedUser) {
  const skillsIds = updatedUser.skills.map(skill => skill.id);
  return {
    ...updatedUser,
    skillsIds
  };
}

class MemberProfileEditPage extends Component {
  render() {
    return (
      <AuthenticationContext.Consumer>
        {context => (
          <Mutation
            mutation={updateUserQuery}
            onCompleted={({ updateUser }) => {
              context.setCurrentUserProfile(updateUser);
            }}
          >
            {mutate => {
              const onEdit = updatedUser =>
                mutate({
                  variables: {
                    ...prepUserForUpdate(updatedUser),
                    id: context.authData.userId
                  }
                });

              const WrappedComponent = withEditPage({
                renameProps: { formData: 'user' }
              })(MemberProfile);
              return (
                <WrappedComponent
                  onEdit={onEdit}
                  user={context.authData.userProfile}
                />
              );
            }}
          </Mutation>
        )}
      </AuthenticationContext.Consumer>
    );
  }
}

export default MemberProfileEditPage;
