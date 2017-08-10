import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Members = ({ members }) => {
  return (
    <div>
      {members.map(member =>
        <div key={member.email}>
          {member.email}
        </div>
      )}
    </div>
  );
};

Members.defaultProps = {
  members: []
};

const membersQuery = gql`
  query members {
    allMembers {
      email
    }
  }
`;

const MembersWithData = graphql(membersQuery, {
  options: () => ({}),
<<<<<<< HEAD
  props: ({ data: { allMembers} }) => ({ members: allMembers })
=======
  props: ({ data }) => {
    return { members: data.allMembers };
  }
>>>>>>> pull members query out into variable
})(Members);

export default MembersWithData;
