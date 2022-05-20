import styled from "styled-components";
import { theme } from "../styles/theme";
import { H3 } from "./typography/H3";

export const UserIcon = (): JSX.Element => {
  return (
    <UserIconContainer>
      <StyledH3>K</StyledH3>
    </UserIconContainer>
  );
};

const UserIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 44px;
  background-color: ${theme.colors.background.purple};
`;

const StyledH3 = styled(H3)`
  font-weight: normal;
`;
