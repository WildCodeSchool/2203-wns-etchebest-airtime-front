import { theme } from "../styles/theme";
import { STATUS } from "../types/enums/status.enum";

export const statusService = {
  status: [
    {
      text: STATUS.TODO,
      value: 20,
      color: theme.colors.primary.coral,
    },
    {
      text: STATUS.INPROGRESS,
      value: 36,
      color: theme.colors.primary.salmon,
    },
    {
      text: STATUS.REVIEWED,
      value: 11,
      color: theme.colors.primary.olive,
    },
    {
      text: STATUS.COMPLETED,
      value: 3,
      color: theme.colors.primary.cyan,
    },
  ],
};

//TODO: Change DB enum to match front-end enum
//TODO: Get the values in database
