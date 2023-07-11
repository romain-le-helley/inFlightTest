import { Box } from "@mui/material";
import TicketButtons from "./TicketButtons";
import TicketsList from "./TicketsList";
import { ITicketContextType, TicketContext } from "../Contexts/TicketContext";
import { useContext } from "react";
import HeaderTickets from "./HeaderTickets";

const Tickets = () => {
  const { tickets, createTicket } = useContext(
    TicketContext
  ) as ITicketContextType;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        border: 1,
        borderRadius: 2,
        borderColor: "#D8D8D8",
        flex: 1,
      }}
    >
      <HeaderTickets />
      <TicketsList tickets={tickets} />
      <TicketButtons createTicket={createTicket} />
    </Box>
  );
};

export default Tickets;
