import React, { useEffect, useState } from "react";
import { ITicket, TicketContext } from "../Contexts/TicketContext";

const baseUrl = "http://localhost:8080";

const TicketProvider = ({ children }: React.PropsWithChildren) => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const createTicket = async (newTicket: ITicket) => {
    const ticketBody = JSON.stringify(newTicket);

    const ticketResponse = await fetch(baseUrl + "/tickets", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: ticketBody,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw alert("Your ticket hasn't been created.");
        }
        return await response.json();
      })
      .catch((error) => {
        throw alert(error);
      });

    if (ticketResponse) {
      setTickets((previousTickets) => [...previousTickets, ticketResponse]);
    }
  };

  const getAllTickets = async () => {
    const ticketsResponse = await fetch(baseUrl + "/tickets", {
      method: "GET",
      mode: "cors",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw alert("We couldn't get any ticket. Please retry later");
        }
        return await response.json();
      })
      .catch((error) => {
        throw alert(error);
      });

    if (ticketsResponse) {
      setTickets(ticketsResponse);
    }
  };

  const changeTicketStatus = async (ticketId: string) => {
    const ticketsResponse = await fetch(baseUrl + "/tickets", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: ticketId }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw alert(
            "We couldn't change the status of the ticket. Try again later"
          );
        }
        return await response.json();
      })
      .catch((error) => {
        throw alert(error);
      });

    if (ticketsResponse) {
      setTickets(ticketsResponse);
    }
  };

  useEffect(() => {
    getAllTickets();
  }, []);

  return (
    <TicketContext.Provider
      value={{ tickets, createTicket, getAllTickets, changeTicketStatus }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
