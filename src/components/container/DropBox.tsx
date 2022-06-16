import React, { ReactNode } from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";

export const DropBox = ({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}): JSX.Element => {
  return <Box color={color}>{children}</Box>;
};

const Box = styled.div`
  background-color: ${({ color }) => color || theme.colors.primary.coral};
  width: 20%;
`;
