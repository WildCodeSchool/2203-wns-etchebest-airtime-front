import { theme } from "../styles/theme";
import { IStatus } from "../types/utils.model";

export const statusService = {
  status: [
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
  ],
};

//Get ToDo value
//Get InProgress value
//Get Reviewed value
//Get Completed value
