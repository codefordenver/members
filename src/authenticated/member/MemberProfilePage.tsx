import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import MemberProfile, { MemberProfileFragment } from './MemberProfile';
import {
  getUser,
  getUserVariables,
  getUser_user
} from './__generated__/getUser';

const userQuery = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      ...MemberProfileFragment
    }
  }
  ${MemberProfileFragment}
`;

type MemberProfileOuterProps = {
  match: {
    params: {
      id: string;
    };
  };
};
type ComponentProps = {
  user?: getUser_user;
  editing: boolean;
  onFormDataChange: (value: any) => void;
};

const MemberProfilePage = graphql<
  MemberProfileOuterProps,
  getUser,
  getUserVariables,
  ComponentProps
>(userQuery, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  },
  props: props => {
    const user: getUser_user | undefined =
      (props.data && props.data.user) || undefined;

    return {
      user,
      editing: false,
      onFormDataChange: (value: any) => {}
    };
  }
})(MemberProfile);

export default MemberProfilePage;
