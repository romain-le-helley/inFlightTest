import { Box } from "@mui/material";
import TicketButtons from "./TicketButtons";
import HeaderTicket from "./HeaderTicket";
import TicketsList from "./TicketsList";
import { ITicketContextType, TicketContext } from "../Contexts/TicketContext";
import { useContext } from "react";

interface Props {}

const Tickets = ({}: Props) => {
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
      <HeaderTicket />
      <TicketsList tickets={tickets} />
      <TicketButtons createTicket={createTicket} />
    </Box>
  );
};

export default Tickets;
