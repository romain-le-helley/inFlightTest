import { createContext } from "react";

enum Status {
  open = "open",
  closed = "closed",
}

export interface ITicket {
  client?: string;
  issue: string;
  deadline?: Date;
  status?: Status;
}

export const TicketContext = createContext<{
  tickets: ITicket[];
  createTicket: (ticketInformations: ITicket) => void;
  getAllTickets: () => void;
  changeTicketStatus: (ticketId: string) => void;
}>({
  tickets: [],
  createTicket: () => {},
  getAllTickets: () => {},
  changeTicketStatus: () => {},
});
