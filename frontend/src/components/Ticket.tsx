import { Box, Typography, Switch } from "@mui/material";
import { ITicket } from "../containers/Contexts/TicketContext";
import AdjustIcon from "@mui/icons-material/Adjust";

interface Props {
  ticket: ITicket;
  index: number;
}

const Ticket = ({ ticket, index }: Props) => {
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
        {/* <Switch defaultChecked color="success" />
        <AdjustIcon color="success" />
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
