import React, { useContext } from 'react';
import gql from 'graphql-tag';
import MemberForm, { MEMBER_FORM_FRAGMENT } from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useCustomQuery } from '../../utils/hooks';
import { GetUserQuery } from '../../generated-models';

// QUESTION: Should this query be shared the way it is,
// or be unique per semantic use
export const GET_USER = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      ...MemberProfileFragment
    }
  }
  ${MEMBER_FORM_FRAGMENT}
`;

const MemberPage: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  const { data } = useCustomQuery<GetUserQuery>(GET_USER, {
    variables: { id: authContext.authData.userId }
  });
  if (!data || !data.user) return null;

  return <MemberForm initialValues={data.user} canEdit />;
};

export default MemberPage;
