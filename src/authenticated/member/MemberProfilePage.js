import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import MemberProfile from './MemberProfile';

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
      ...Projects
    }
  }
  ${MemberProfile.fragments.skills}
  ${MemberProfile.fragments.projects}
`;

const MemberProfilePage = graphql(userQuery, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  },
  props: ({ data: { user } }) => ({ user })
})(MemberProfile);

export default MemberProfilePage;
