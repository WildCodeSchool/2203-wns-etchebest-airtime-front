import styled from "styled-components";
import { theme } from "../styles/theme";
import { Ticket } from "../types/utils.model";
import { H6 } from "./typography/H6";
import { P } from "./typography/P";
import { UserIcon } from "./UserIcon";

interface Props {
  title?: boolean;
  ticket?: Ticket;
}

export const ActivityLine = ({ title, ticket }: Props): JSX.Element => {
  if (title)
    return (
      <Title>
        <StyledH6>Recent Activities</StyledH6>
      </Title>
    );
  return (
    <ActivityLineContainer>
      <UserIcon />
      <GlobalWrapper>
        <TextWrapper>
          <PurpleText>{ticket?.user}</PurpleText>
          <BlackText>&nbsp;{ticket?.action}</BlackText>
          <PurpleText>&nbsp;&quot;{ticket?.name}&quot;</PurpleText>
          <BlackText>&nbsp;{ticket?.status && ticket.status}</BlackText>
        </TextWrapper>
        <Time>{ticket?.time}</Time>
      </GlobalWrapper>
    </ActivityLineContainer>
  );
};

const ActivityLineContainer = styled.div`
  display: flex;

  box-sizing: border-box;

  background-color: ${theme.colors.background.white};

  height: 60px;
  border-bottom: 3px solid ${theme.colors.background.main};

  padding: 8px;
`;

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 15px;
`;

const Title = styled(ActivityLineContainer)`
  height: 40px;
`;

const StyledH6 = styled(H6)`
  margin: auto 15px;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const PurpleText = styled(P)`
  color: ${theme.colors.text.purple};
  font-weight: bold;
`;

const BlackText = styled(P)`
  font-weight: bold;
`;

const Time = styled(P)`
  font-size: 12px;
  color: ${theme.colors.text.grey.darkVador};
`;
