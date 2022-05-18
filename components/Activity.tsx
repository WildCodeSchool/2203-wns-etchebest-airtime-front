import styled from "styled-components";
import { theme } from "../styles/theme";

export const Activity = (): JSX.Element => {
  return <ActivityContainer></ActivityContainer>;
};

const ActivityContainer = styled.div`
  background-color: ${theme.colors.background.white};
  flex: 1;
  width: calc(100% - 56px);
  margin: 40px 28px;
`;
