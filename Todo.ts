import { Status } from "./Status";

interface Todo<T> {
  id: string;
  discription: string;
  status: Status;
  assignee?: string; //Bearbeiter? optionales property
  data: T;
}

export { Todo };
