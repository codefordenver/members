import MemberProfile from './MemberProfile';
import { GetUserHOC, GetUserUser } from '../../generated-models';

type MemberProfilePageOuterProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const MemberProfilePage = GetUserHOC<MemberProfilePageOuterProps>({
  options: props => {
    return { variables: { id: props.match.params.id } };
  },
  props: props => {
    const user: GetUserUser | undefined =
      (props.data && props.data.user) || undefined;

    return {
      user,
      editing: false,
      onFormDataChange: (value: any) => {}
    };
  }
})(MemberProfile);

export default MemberProfilePage;
