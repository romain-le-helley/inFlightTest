import { useState } from "react";
import { INewTicket } from "../Contexts/TicketContext";
import { Box, Button } from "@mui/material";
import { theme } from "../../theme/Theme";
import CustomTextField from "../../components/CustomTextField";

interface Props {
  createTicket: (ticket: INewTicket) => void;
  closeModal: () => void;
}

const CreateNewTicket = ({ createTicket, closeModal }: Props) => {
  const [client, setClient] = useState<string>("");
  const [issue, setIssue] = useState<string>("");
  const [deadline, setDeadline] = useState<Date>(new Date());

  const handleCreateNewTicket = () => {
    createTicket({ client, issue, deadline });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        backgroundColor: theme.palette.white,
        boxShadow: 8,
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CustomTextField
          label="Client"
          variant="outlined"
          margin="dense"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        <CustomTextField
          label="Issue"
          variant="outlined"
          margin="dense"
          multiline
          maxRows={5}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <CustomTextField
          label="Deadline"
          type="date"
          margin="dense"
          value={deadline.toISOString().slice(0, 10)}
          onChange={(e) => setDeadline(new Date(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            backgroundColor: theme.palette.white,
            width: "max-content",
            m: 1,
          }}
          variant="contained"
          onClick={closeModal}
        >
          Close
        </Button>
        <Button
          sx={{
            backgroundColor: theme.palette.button.main,
            color: theme.palette.white,
            ":hover": {
              backgroundColor: theme.palette.button.main,
              opacity: 0.9,
            },
            width: "max-content",
            m: 1,
          }}
          variant="contained"
          onClick={handleCreateNewTicket}
        >
          Create the ticket
        </Button>
      </Box>
    </Box>
  );
};

export default CreateNewTicket;
