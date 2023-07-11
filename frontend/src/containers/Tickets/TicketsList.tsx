import { Box, List, ListItem, useTheme } from "@mui/material";
import { ITicket } from "../Contexts/TicketContext";
import Ticket from "../../components/Ticket";
import { useMemo } from "react";

interface Props {
  tickets: ITicket[];
}

const TicketsList = ({ tickets }: Props) => {
  const theme = useTheme();

  const renderTickets = useMemo(() => {
    const ticketList = tickets.map((ticket, index) => {
      return (
        <ListItem
          key={index}
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}
        >
          <Ticket ticket={ticket} index={index} />
        </ListItem>
      );
    });

    return <List sx={{ width: "100%" }}>{ticketList}</List>;
  }, [tickets, theme.palette]);

  return (
    <Box sx={{ maxWidth: "50vw", mb: 2, overflow: "scroll", height: "100%" }}>
      {renderTickets}
    </Box>
  );
};

export default TicketsList;
