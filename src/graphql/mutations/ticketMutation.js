import { gql } from "@apollo/client";

export const CREATE_TICKET = gql`
  mutation CreateTicket(
    $title: String!
    $comment: String
    $estimated_time: Int!
    $spent_time_minutes: Int
    $status: String!
    $user_id: String
    $project_id: Int!
  ) {
    createTicket(
      title: $title
      comment: $comment
      estimated_time: $estimated_time
      spent_time_minutes: $spent_time_minutes
      status: $status
      user_id: $user_id
      project_id: $project_id
    ) {
      id
      title
      comment
      estimated_time
      spent_time_minutes
      status
      user_id
      project_id
    }
  }
`;

export const DELETE_TICKET = gql`
mutation DeleteTicket($deleteTicketId: Int!) {
  deleteTicket(id: $deleteTicketId) {
    id
    title
    comment
    estimated_time
    spent_time_minutes
    status
    user_id
    project_id
  }
}
`;

export const UPDATE_TICKET = gql`
  mutation UpdateTicket(
    $updateTicketId: Int!
    $title: String
    $comment: String
    $estimated_time: Int
    $spent_time_minutes: Int
    $status: String
    $user_id: String
    $project_id: Int
  ) {
    updateTicket(
      id: $updateTicketId
      title: $title
      comment: $comment
      estimated_time: $estimated_time
      spent_time_minutes: $spent_time_minutes
      status: $status
      user_id: $user_id
      project_id: $project_id
    ) {
      id
      title
      comment
      estimated_time
      spent_time_minutes
      status
      user_id
      project_id
    }
  }
`;
