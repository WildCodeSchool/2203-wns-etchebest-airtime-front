import styled from "styled-components";
import { theme } from "../styles/theme";

interface Props {
  text: string;
  value: number;
  color: string;
}

export const StatusCard = ({ text, value, color }: Props): JSX.Element => {
  return (
    <StatusCardContainer color={color}>
      <p>{text}</p>
      <p>{value}</p>
    </StatusCardContainer>
  );
};

const StatusCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${({ color }) => color};
  width: 200px;
  height: calc(100% - 32px);
  margin: 16px 0;
  border-radius: 8px;
`;
