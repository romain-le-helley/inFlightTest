import { Box, Typography } from "@mui/material";
import {
  ITicket,
  ITicketContextType,
  Status,
  TicketContext,
} from "../containers/Contexts/TicketContext";
import AdjustIcon from "@mui/icons-material/Adjust";
import CustomSwitch from "./CustomSwitch";
import { useContext, useState } from "react";

interface Props {
  ticket: ITicket;
  index: number;
}

const Ticket = ({ ticket, index }: Props) => {
  const [ticketStatus, setTicketStatus] = useState<Status>(ticket.status);

  const { changeTicketStatus } = useContext(
    TicketContext
  ) as ITicketContextType;

  const handleStatusChange = async () => {
    setTicketStatus((previousStatus) =>
      previousStatus === Status.open ? Status.closed : Status.open
    );
    const hasStatusChange = await changeTicketStatus(ticket._id);
    if (!hasStatusChange) {
      setTicketStatus((previousStatus) =>
        previousStatus === Status.open ? Status.closed : Status.open
      );
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ justifyContent: "space-between", display: "flex", mb: 2 }}>
        <Typography variant="body1">
          {index + 1}. {ticket.client}
        </Typography>
        <Typography variant="body1">
          {new Date(
            ticket.deadline ? ticket.deadline : ""
          ).toLocaleDateString()}
        </Typography>
        <CustomSwitch
          checked={ticketStatus === Status.open ? false : true}
          disabled={ticketStatus === Status.closed}
          onChange={handleStatusChange}
        />
        {/*<AdjustIcon color="success" />
        <AdjustIcon color="warning" />
        <AdjustIcon color="primary" />
        <AdjustIcon color="secondary" />
        <AdjustIcon color="action" /> */}
      </Box>
      <Typography
        variant="body2"
        color="grey"
        align="left"
        noWrap
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          p: 2,
          overflow: "auto",
        }}
      >
        {ticket.issue}
      </Typography>
    </Box>
  );
};

export default Ticket;
