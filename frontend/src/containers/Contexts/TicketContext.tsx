import { createContext } from "react";

export enum Status {
  open = "open",
  closed = "closed",
}

export interface ITicket {
  client: string;
  issue: string;
  deadline: Date;
  status: Status;
  _id: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface INewTicket {
  client?: string;
  issue?: string;
  deadline?: Date;
}

export interface ITicketContextType {
  tickets: ITicket[];
  createTicket: (ticketInformations: INewTicket) => void;
  getAllTickets: () => void;
  changeTicketStatus: (ticketId: string) => Promise<boolean>;
}

export const TicketContext = createContext<ITicketContextType>({
  tickets: [],
  createTicket: () => {},
  getAllTickets: () => {},
  changeTicketStatus: async () => await false,
});
