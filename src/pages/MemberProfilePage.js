import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import MemberProfile from '../presentational/MemberProfile';

const userQuery = gql`
  query getUser($id: ID) {
    User(id: $id) {
      picture
      name
      description
      githubName
      flowdockName
      email
    }
  }
`;

const MemberProfileWithData = graphql(userQuery, {
  options: props => ({ variables: { id: props.match.params.id } }),
  props: ({ data: { User } }) => ({ user: User })
})(MemberProfile);

export default MemberProfileWithData;
