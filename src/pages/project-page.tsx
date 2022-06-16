import { NextPage } from "next";
import React from "react";
import { WrapperProject } from "../components/container/WrapperProject";
import { theme } from "../styles/theme";
import { DropBox } from "../components/container/DropBox";
import { TitleBox } from "../components/container/TitleBox";
import { DropZone } from "../components/container/DropZone";
import { ColumnStatus } from "../components/ColumnStatus";
import { gql, useQuery } from "@apollo/client";

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

const ProjectPage: NextPage = () => {
  const project = {
    title: "Project Title",
    manager: "Bryan Kaneb",
  };

  const GET_TICKETS = gql`
    query getTest {   //front
      getAllTickets { //back
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

  const { loading, error, data } = useQuery(GET_TICKETS);
  console.log("🚀 ~ error", error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <WrapperProject>
      <TitleBox title={project.title} manager={project.manager} />
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