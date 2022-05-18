import { Status } from "./Status";
import { Activity } from "./Activity";

import styled from "styled-components";
import { theme } from "../styles/theme";

export const Dashboard = (): JSX.Element => (
  <DashboardContainer>
    <Status />
    <Activity />
  </DashboardContainer>
);

const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
