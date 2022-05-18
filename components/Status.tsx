import styled from "styled-components";
import { theme } from "../styles/theme";

export const Status = (): JSX.Element => {
  return <StatusContainer />;
};

const StatusContainer = styled.div`
  width: calc(100% - 56px);

  height: 50px;
  background-color: ${theme.colors.background.purple};
  margin-top: 50px;
`;
