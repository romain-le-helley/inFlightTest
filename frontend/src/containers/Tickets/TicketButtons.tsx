import { ITicket } from "../Contexts/TicketContext";
import { Button, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  createTicket: (ticket: ITicket) => void;
}

const TicketButtons = ({ createTicket = ({}) => {} }: Props) => {
  const handleCreateNewTicket = () => {
    createTicket({});
  };

  return (
    <Grid
      container
      justifyContent="flex-end"
      rowSpacing={1}
      columnSpacing={2}
      sx={{ m: 0, width: "100%" }}
    >
      <Grid item>
        <Button
          variant="contained"
          onClick={handleCreateNewTicket}
          endIcon={<NavigateNextIcon />}
        >
          Create Randomly
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={handleCreateNewTicket}
          endIcon={<NavigateNextIcon />}
        >
          Create new
        </Button>
      </Grid>
    </Grid>
  );
};

export default TicketButtons;
