import styled from "styled-components";
import { H3 } from "./typography/H3";

interface Props {
  text: string;
  value: number;
  color: string;
}

export const StatusCard = ({ text, value, color }: Props): JSX.Element => {
  return (
    <StatusCardContainer color={color}>
      <TextWrapper>
        <H3>{text}</H3>
        <BigH3>{value}</BigH3>
      </TextWrapper>
    </StatusCardContainer>
  );
};

const StatusCardContainer = styled.div`
  background-color: ${({ color }) => color};

  height: calc(100% - 32px);
  width: 200px;

  margin: 16px 0;
  border-radius: 8px;
`;

const BigH3 = styled(H3)`
  font-size: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  margin: 0 30px;
`;
