import { theme } from "../styles/theme";

import { statusService } from "../services/status.service";
import { IStatus } from "../types/utils.model";

import { StatusCard } from "./StatusCard";

import styled from "styled-components";

const statusCards = statusService.status.map(
  (stat: IStatus, i: number): JSX.Element => (
    <StatusCard
      key={i}
      text={stat.text}
      value={stat.value}
      color={stat.color}
    />
  )
);

export const Status = (): JSX.Element => (
  <StatusContainer>{statusCards}</StatusContainer>
);

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: calc(100% - 56px);

  height: 150px;
  background-color: ${theme.colors.background.white};
  margin-top: 50px;

  box-shadow: ${theme.shadows.card};
`;
