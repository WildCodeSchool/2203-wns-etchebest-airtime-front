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
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${theme.colors.background.main};
  align-items: center;
`;
