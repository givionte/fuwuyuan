import gql from "graphql-tag";

const GET_PAGINATED_ASSIGNMENTS_WITH_USERS = gql`
  query getAssignedTasks($cursor: String, $limit: Int!) {
    assignedTasks(cursor: $cursor, limit: $limit)
      @connection(key: "AssignedTaskConnection") {
      edges {
        id
        assignmentId
        status
        dueDate
        createdAt
        assignedTo
        assignedToName
        updatedDocumentName
        updatedDocumentUrl
        user {
          id
          username
        }
        assignment {
          id
          assignmentName
          note
          link
          createdAt
          documentName
          documentUrl
          user {
            id
            username
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
export default GET_PAGINATED_ASSIGNMENTS_WITH_USERS;
