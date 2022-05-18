import styled from "styled-components";
import { theme } from "../styles/theme";
import { StatusCard } from "./StatusCard";

const status: IStatus[] = [
  {
    text: "To Do",
    value: 20,
    color: theme.colors.primary.coral,
  },
  {
    text: "In Progress",
    value: 36,
    color: theme.colors.primary.salmon,
  },
  {
    text: "Reviewed",
    value: 11,
    color: theme.colors.primary.olive,
  },
  {
    text: "Completed",
    value: 3,
    color: theme.colors.primary.cyan,
  },
];

interface IStatus {
  text: string;
  value: number;
  color: string;
}

export const Status = (): JSX.Element => {
  return (
    <StatusContainer>
      {status.map((stat, i) => (
        <StatusCard
          key={i}
          text={stat.text}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: calc(100% - 56px);

  height: 150px;
  background-color: ${theme.colors.background.white};
  margin-top: 50px;
`;
