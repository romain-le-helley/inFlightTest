import { Box, Typography, useTheme } from "@mui/material";
import {
  ITicket,
  ITicketContextType,
  Status,
  TicketContext,
} from "../containers/Contexts/TicketContext";
import AdjustIcon from "@mui/icons-material/Adjust";
import CustomSwitch from "./CustomSwitch";
import { useContext, useMemo, useState } from "react";

interface Props {
  ticket: ITicket;
  index: number;
}

const Ticket = ({ ticket, index }: Props) => {
  const [ticketStatus, setTicketStatus] = useState<Status>(ticket.status);

  const theme = useTheme();
  const { changeTicketStatus } = useContext(
    TicketContext
  ) as ITicketContextType;

  const deadlineStatus = useMemo(() => {
    if (ticketStatus === Status.closed) {
      return <AdjustIcon color="success" />;
    }

    const deadlineTicket = new Date(ticket.deadline).getTime();
    const todaysDate = new Date().getTime();

    if (
      new Date(deadlineTicket).setUTCHours(0, 0, 0, 0) >
      new Date(todaysDate).setUTCHours(0, 0, 0, 0)
    ) {
      return <AdjustIcon style={{ color: theme.palette.warning.main }} />;
    } else {
      return <AdjustIcon style={{ color: theme.palette.danger.main }} />;
    }
  }, [ticketStatus, ticket.deadline, theme.palette]);

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
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          mb: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
          {index + 1}. {ticket.client}
        </Typography>
        <Typography variant="body1">
          {new Date(
            ticket.deadline ? ticket.deadline : ""
          ).toLocaleDateString()}
        </Typography>
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <CustomSwitch
            checked={ticketStatus === Status.open ? false : true}
            onChange={handleStatusChange}
          />
          {deadlineStatus}
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="grey"
        align="left"
        noWrap
        sx={{
          backgroundColor: theme.palette.white,
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
