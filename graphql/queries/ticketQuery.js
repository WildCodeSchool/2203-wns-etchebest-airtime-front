import { gql } from '@apollo/client'

export const GET_ALL_TICKETS = gql`
    query GetAllTickets {
      getAllTickets {
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
