import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Moment from "react-moment";
import styled from "styled-components";
import PropTypes from "prop-types";

import withSession from "../../Session/withSession";
import GET_PAGINATED_ASSIGNMENTS_WITH_USERS from "../AssignmentSchema";
import Loading from "../../Loading";
import * as Styled from "./style";
import ErrorMessage from "../../Alerts/Error";
import Button from "../../../theme/Button";

const AssignedTasks = ({ limit, me }) => {
  const { data, loading, error, fetchMore } = useQuery(
    GET_PAGINATED_ASSIGNMENTS_WITH_USERS,
    { variables: { limit } }
  );
  if (loading && !data) {
    return <Loading />;
  } else if (!data) {
    return <div>There are no assignments right now ...</div>;
  } else if (error) {
    return <ErrorMessage error={error} />;
  }

  const { edges, pageInfo } = data.assignedTasks;

  return (
    <Styled.AssignmentContainer>
      <AssignedTaskList assignedTasks={edges} me={me} />

      {pageInfo.hasNextPage && (
        <MoreAssignedTasksButton
          limit={limit}
          pageInfo={pageInfo}
          fetchMore={fetchMore}
        >
          More
        </MoreAssignedTasksButton>
      )}
    </Styled.AssignmentContainer>
  );
};

AssignedTasks.propTypes = {
  limit: PropTypes.number.isRequired,
  me: PropTypes.object
};

const MoreAssignedTasksButton = ({ limit, pageInfo, fetchMore, children }) => (
  <AssignmentButton
    type="button"
    onClick={() =>
      fetchMore({
        variables: {
          cursor: pageInfo.endCursor,
          limit
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          return {
            assignedTasks: {
              ...fetchMoreResult.assignedTasks,
              edges: [
                ...previousResult.assignedTasks.edges,
                ...fetchMoreResult.assignedTasks.edges
              ]
            }
          };
        }
      })
    }
  >
    {children}
  </AssignmentButton>
);

const AssignmentButton = styled(Button)`
  margin: auto;
  display: block;
  width: 205px;
  border: 2px solid ${props => props.theme.primaryDark};
`;

MoreAssignedTasksButton.propTypes = {
  limit: PropTypes.number.isRequired,
  pageInfo: PropTypes.object.isRequired,
  fetchMore: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

const AssignedTaskList = ({ assignedTasks, me }) => {
  return assignedTasks.map(assignedTask => (
    <AssignedTaskItem
      key={assignedTask.id}
      assignedTask={assignedTask}
      me={me}
    />
  ));
};

AssignedTaskList.propTypes = {
  assignedTasks: PropTypes.array.isRequired,
  me: PropTypes.object
};

const AssignmentItemBase = ({
  assignedTask: {
    dueDate,
    id,
    status,
    createdAt,
    assignment: {
      assignmentName,
      link,
      note,
      user: { username }
    }
  },
  session
}) => (
  <Styled.AssignmentItemContainer>
    <Styled.CardGrid>
      <Styled.Title>{assignmentName}</Styled.Title>
      <Styled.Status status={status}>{status}</Styled.Status>
      <Styled.DueDate>Due: {dueDate}</Styled.DueDate>

      <Styled.Note>{note}</Styled.Note>

      <Styled.ExternalLink
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        View Link
      </Styled.ExternalLink>
      <Styled.CreatedInfo>
        <Styled.CreatedAt>
          Created on: <Moment format="YYYY-MM-DD">{createdAt}</Moment>
        </Styled.CreatedAt>
        <Styled.CreatedBy>Created by: {username}</Styled.CreatedBy>
      </Styled.CreatedInfo>
    </Styled.CardGrid>
  </Styled.AssignmentItemContainer>
);

AssignmentItemBase.propTypes = {
  assignedTask: PropTypes.object.isRequired,
  me: PropTypes.object
};

const AssignedTaskItem = withSession(AssignmentItemBase);

export default AssignedTasks;
