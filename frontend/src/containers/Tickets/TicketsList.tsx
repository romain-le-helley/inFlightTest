import { Box, List, ListItem } from "@mui/material";
import { ITicket } from "../Contexts/TicketContext";
import Ticket from "../../components/Ticket";

interface Props {
  tickets: ITicket[];
}

const TicketsList = ({ tickets }: Props) => {
  const renderTickets = () => {
    const ticketList = tickets.map((ticket, index) => {
      return (
        <ListItem
          key={index}
          sx={{
            backgroundColor: "#CEE3F6",
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
  };

  return (
    <Box sx={{ maxWidth: "50vw", mb: 2, overflow: "scroll", height: "100%" }}>
      {renderTickets()}
    </Box>
  );
};

export default TicketsList;