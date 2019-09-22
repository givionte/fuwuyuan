import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import ErrorMessage from "../../Alerts/Error";
import GET_PAGINATED_ASSIGNMENTS_WITH_ASSIGNED_USERS from "../AssignmentAdmin/AssignmentAdminSchema";

const CREATE_ASSIGNMENT = gql`
  mutation($assignmentName: String!, $note: String, $link: String) {
    createAssignment(
      assignmentName: $assignmentName
      note: $note
      link: $link
    ) {
      id
      assignmentName
      note
      link
      createdAt
      user {
        id
        username
      }
      assignedTasks {
        status
        dueDate
      }
    }
  }
`;

class AssignmentCreate extends Component {
  state = {
    assignmentName: "",
    note: "",
    link: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = async (event, createAssignment) => {
    event.preventDefault();

    try {
      await createAssignment();
      this.setState({ assignmentName: "", note: "", link: "" });
    } catch (error) {}
  };

  render() {
    const { assignmentName, note, link } = this.state;

    return (
      <Mutation
        mutation={CREATE_ASSIGNMENT}
        variables={{ assignmentName, note, link }}
        update={(cache, { data: { createAssignment } }) => {
          const data = cache.readQuery({
            query: GET_PAGINATED_ASSIGNMENTS_WITH_ASSIGNED_USERS
          });

          cache.writeQuery({
            query: GET_PAGINATED_ASSIGNMENTS_WITH_ASSIGNED_USERS,
            data: {
              ...data,
              assignments: {
                ...data.assignments,
                edges: [createAssignment, ...data.assignments.edges],
                pageInfo: data.assignments.pageInfo
              }
            }
          });
        }}
      >
        {(createAssignment, { data, loading, error }) => (
          <form onSubmit={event => this.onSubmit(event, createAssignment)}>
            <textarea
              name="assignmentName"
              value={assignmentName}
              onChange={this.onChange}
              type="text"
              placeholder="Your assignment name ... (REQUIRED)"
            />
            <textarea
              name="note"
              value={note}
              onChange={this.onChange}
              type="text"
              placeholder="Add details and notes ..."
            />
            <textarea
              name="link"
              value={link}
              onChange={this.onChange}
              type="text"
              placeholder="Add a URL link"
            />
            <button type="submit">Submit</button>

            {error && <ErrorMessage error={error} />}
          </form>
        )}
      </Mutation>
    );
  }
}

export default AssignmentCreate;
