import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import withEditPage from '../../utils/withEditPage';
import MemberProfile from './MemberProfile';
import AuthContext from '../../utils/authentication/authContext';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

export const getCompleteUserProfile = gql`
  query getCompleteUserProfile($id: ID) {
    user: User(id: $id) {
      id
      name
      picture
      email
      flowdockName
      githubName
      description
      role
      skills {
        id
        name
      }
      projectsChampioned {
        id
        name
      }
    }
  }
`;

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
      <AuthContext.Consumer>
        {context => (
          <Query
            query={getCompleteUserProfile}
            variables={{ id: context.authData.userId }}
          >
            {({ loading, data }) => {
              if (loading) return <CircularProgress />;

              return (
                <Mutation mutation={updateUserQuery}>
                  {mutate => {
                    console.log(context.authData);
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
                      <WrappedComponent onEdit={onEdit} user={data.user} />
                    );
                  }}
                </Mutation>
              );
            }}
          </Query>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default MemberProfileEditPage;
