import { createContext } from "react";

enum Status {
  open = "open",
  closed = "closed",
}

export interface ITicket {
  client?: string;
  issue?: string;
  deadline?: Date;
  status?: Status;
}

export interface ITicketContextType {
  tickets: ITicket[];
  createTicket: (ticketInformations: ITicket) => void;
  getAllTickets: () => void;
  changeTicketStatus: (ticketId: string) => void;
}

export const TicketContext = createContext<ITicketContextType>({
  tickets: [],
  createTicket: () => {},
  getAllTickets: () => {},
  changeTicketStatus: () => {},
});
