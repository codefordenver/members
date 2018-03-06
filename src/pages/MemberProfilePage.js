import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import MemberProfile from '../sections/MemberProfile';

const userQuery = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      picture
      name
      description
      githubName
      flowdockName
      email
    }
  }
`;

const MemberProfilePage = graphql(userQuery, {
  options: props => ({ variables: { id: props.match.params.id } }),
  props: ({ data: { user } }) => ({ user })
})(MemberProfile);

export default MemberProfilePage;
