import { ACTION, STATUS } from "../types/enums/action.enum";

export const activityService = {
  tickets: [
    {
      user: "Ben",
      action: ACTION.CREATE,
      name: "UI Design",
      time: "2 minutes ago",
    },
    {
      user: "Yoann",
      action: ACTION.UPDATE,
      name: "Ticket",
      time: "1 hour ago",
    },
    {
      user: "Bryan",
      action: ACTION.UPDATE,
      name: "UI Design",
      status: STATUS.TODO,
      time: "1 hour ago",
    },
    {
      user: "Bryan",
      action: ACTION.UPDATE,
      name: "UI Design",
      status: STATUS.COMPLETED,
      time: "1 hour ago",
    },
    {
      user: "Baptiste",
      action: ACTION.CREATE,
      name: "Back Routes",
      time: "3 hours ago",
    },
    {
      user: "Hurkan",
      action: ACTION.CREATE,
      name: "NavBar",
      time: "3 hours ago",
    },
  ],
};
