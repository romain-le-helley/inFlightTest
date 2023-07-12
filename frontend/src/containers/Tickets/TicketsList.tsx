import { Box, List, ListItem } from "@mui/material";
import { ITicket } from "../Contexts/TicketContext";
import Ticket from "../../components/Ticket";
import { useMemo } from "react";
import { theme } from "../../theme/Theme";

const styles = {
  container: {
    maxWidth: "50vw",
    mb: 2,
    overflow: "scroll",
    height: "100%",
  },
  ticketItem: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    p: 2,
    mb: 2,
  },
};

interface Props {
  tickets: ITicket[];
}

const TicketsList = ({ tickets }: Props) => {
  const renderTickets = useMemo(() => {
    const ticketList = tickets.map((ticket, index) => {
      return (
        <ListItem key={index} sx={styles.ticketItem}>
          <Ticket ticket={ticket} index={index} />
        </ListItem>
      );
    });

    return <List sx={{ width: "100%" }}>{ticketList}</List>;
  }, [tickets]);

  return <Box sx={styles.container}>{renderTickets}</Box>;
};

export default TicketsList;
