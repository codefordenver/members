import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import MemberProfile from './MemberProfile';
import AuthenticationContext from '../../utils/authentication/authContext';

const userQuery = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      id
      picture
      name
      description
      githubName
      flowdockName
      email
      ...Skills
    }
  }
  ${MemberProfile.fragments.skills}
`;

const MyProfilePage = () => (
  <AuthenticationContext.Consumer>
    {context => {
      console.log(context);
      return (
        <Query
          query={userQuery}
          variables={{ id: context.authData.userId }}
          skip={!context.isAuthenticated()}
        >
          {({ data: { user } }) => {
            const WrappedComponent = withViewPage({
              renameProps: { formData: 'user' }
            })(MemberProfile);
            return <WrappedComponent user={user} />;
          }}
        </Query>
      );
    }}
  </AuthenticationContext.Consumer>
);

export default MyProfilePage;
