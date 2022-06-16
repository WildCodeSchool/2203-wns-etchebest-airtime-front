import { useMutation, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { toast } from "react-toastify";
import { ColumnStatus } from "../components/ColumnStatus";
import { DropBox } from "../components/container/DropBox";
import { DropZone } from "../components/container/DropZone";
import { TitleBox } from "../components/container/TitleBox";
import { WrapperProject } from "../components/container/WrapperProject";
import {
  CREATE_TICKET,
  DELETE_TICKET,
  UPDATE_TICKET,
} from "../graphql/mutations/ticketMutation";
import { GET_ALL_TICKETS } from "../graphql/queries/ticketQuery";
import { theme } from "../styles/theme";

const DROP_DATA = [
  {
    backgroundColor: theme.colors.primary.coral,
    title: "TO DO",
    color: theme.colors.primaryOpacity.coral,
  },
  {
    backgroundColor: theme.colors.primary.salmon,
    title: "IN PROGRESS",
    color: theme.colors.primaryOpacity.salmon,
  },
  {
    backgroundColor: theme.colors.primary.olive,
    title: "REVIEWED",
    color: theme.colors.primaryOpacity.olive,
  },
  {
    backgroundColor: theme.colors.primary.cyan,
    title: "COMPLETED",
    color: theme.colors.primaryOpacity.cyan,
  },
];

const ticket = {
  title: "Test",
  comment: "Test",
  estimated_time: 3,
  spent_time_minutes: 4,
  status: "to do",
  project_id: "1",
  user_id: "aef4f44f-bbef-11ec-b561-309c23902d82",
};

const ProjectPage: NextPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_TICKETS);
  //Create ticket
  const [createTicket, { loading: ticketLoading, error: ticketError }] =
    useMutation(CREATE_TICKET, {
      refetchQueries: [GET_ALL_TICKETS],
    });

  //Delete ticket
  const [
    deleteTicket,
    { loading: deleteTicketLoading, error: deleteTicketError },
  ] = useMutation(DELETE_TICKET, {
    refetchQueries: [GET_ALL_TICKETS],
  });

  const [
    updateTicket,
    { loading: updateTicketLoading, error: updateTicketError },
  ] = useMutation(UPDATE_TICKET, {
    refetchQueries: [GET_ALL_TICKETS],
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <>
        {toast.error("Une erreur est survenue", {
          position: toast.POSITION.BOTTOM_CENTER,
        })}
      </>
    );

  if (ticketLoading) return <p>Submitting...</p>;
  if (ticketError) return <p>Error on submit: {ticketError.message}</p>;

  const project = {
    title: "Project Title",
    manager: "Bryan Kaneb",
  };

  return (
    <WrapperProject>
      <TitleBox title={project.title} manager={project.manager} />
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTicket({
              variables: {
                title: "Test",
                comment: "Test",
                estimated_time: 3,
                spent_time_minutes: 4,
                status: "to do",
                project_id: 1,
                user_id: "aef4f44f-bbef-11ec-b561-309c23902d82",
              },
            });
          }}
        >
          <button type="submit">Add Ticket</button>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            deleteTicket({
              variables: {
                deleteTicketId: 2,
              },
            });
          }}
        >
          <button type="submit">Delete Ticket</button>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTicket({
              variables: {
                updateTicketId: 3,
                title: "Test3",
                comment: "Test3",
                estimated_time: 6,
                spent_time_minutes: 10,
              },
            });
          }}
        >
          <button type="submit">Update Ticket</button>
        </form>
      </div>
      <DropZone>
        {DROP_DATA.map((item, index) => (
          <DropBox color={item.color} key={index}>
            <ColumnStatus
              backgroundColor={item.backgroundColor}
              title={item.title}
            />
          </DropBox>
        ))}
        {/*         <DropBox color={theme.colors.primaryOpacity.coral}>
          <ColumnStatus
            title="TO DO"
            backgroundColor={theme.colors.primary.coral}
          />
        </DropBox>
        <DropBox color={theme.colors.primaryOpacity.salmon}>
          <ColumnStatus
            title="IN PROGRESS"
            backgroundColor={theme.colors.primary.salmon}
          />
        </DropBox>
        <DropBox color={theme.colors.primaryOpacity.olive}>
          <ColumnStatus
            title="REVIEWED"
            backgroundColor={theme.colors.primary.olive}
          />
        </DropBox>
        <DropBox color={theme.colors.primaryOpacity.cyan}>
          <ColumnStatus
            title="COMPLETED"
            backgroundColor={theme.colors.primary.cyan}
          />
        </DropBox> */}
      </DropZone>
    </WrapperProject>
  );
};

export default ProjectPage;
