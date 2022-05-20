//Interface propres à l'intelligence et au code

import { ACTION } from "./enums/action.enum";
import { STATUS } from "./enums/status.enum";

export interface isDark {
  isDark: boolean;
}

export interface IStatus {
  text: string;
  value: number;
  color: string;
}

export interface Ticket {
  user: string;
  action: ACTION;
  name: string;
  status?: STATUS;
  time: string;
}
