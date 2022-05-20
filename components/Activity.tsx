import styled from "styled-components";

import { activityService } from "../services/activity.service";

import { ActivityLine } from "./ActivityLine";

const displayTickets = activityService.tickets.map((ticket, i) => (
  <ActivityLine key={i} ticket={ticket} />
));

export const Activity = (): JSX.Element => {
  return (
    <ActivityContainer>
      <ActivityLine title />
      {displayTickets}
    </ActivityContainer>
  );
};

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  width: calc(100% - 56px);
  margin: 40px 28px;
`;
