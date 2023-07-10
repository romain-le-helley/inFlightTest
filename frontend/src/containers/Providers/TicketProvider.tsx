import React, { useState } from "react";
import { ITicket, TicketContext } from "../Contexts/TicketContext";

const baseUrl = "http://localhost:8080";

const TicketProvider = ({ children }: React.PropsWithChildren) => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const createTicket = async (newTicket: ITicket) => {
    const ticketsResponse = await fetch(baseUrl + "/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(newTicket),
    });

    if (ticketsResponse.ok) {
      console.log(ticketsResponse);
      // setTickets(previousTickets => [...previousTickets, ticketsResponse])
    }
  };

  const getAllTickets = async () => {
    const ticketsResponse = await fetch(baseUrl + "/tickets", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (ticketsResponse.ok) {
      console.log(ticketsResponse);
      // setTickets(ticketsResponse)
    }
  };

  const changeTicketStatus = async (ticketId: string) => {
    const ticketsResponse = await fetch(baseUrl + "/tickets", {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ id: ticketId }),
    });

    if (ticketsResponse.ok) {
      console.log(ticketsResponse);
      // find the right ticket to update
    }
  };

  return (
    <TicketContext.Provider
      value={{ tickets, createTicket, getAllTickets, changeTicketStatus }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
