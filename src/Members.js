import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Member = ({ members }) => {
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

Member.defaultProps = {
  members: []
};

const MembersWithData = graphql(
  gql`
    query members {
      allMembers {
        email
      }
    }
  `,
  {
    options: () => ({}),
    props: ({ data }) => {
      return { members: data.allMembers };
    }
  }
)(Member);

export default MembersWithData;
