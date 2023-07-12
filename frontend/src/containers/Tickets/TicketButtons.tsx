import { INewTicket } from "../Contexts/TicketContext";
import { Button, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { theme } from "../../theme/Theme";

const styles = {
  createRandomButton: {
    backgroundColor: theme.palette.button.main,
    color: theme.palette.white,
    ":hover": {
      backgroundColor: theme.palette.button.main,
      opacity: 0.9,
    },
  },
  createNewButton: {
    backgroundColor: theme.palette.button.main,
    color: theme.palette.white,
    ":hover": {
      backgroundColor: theme.palette.button.main,
      opacity: 0.9,
    },
  },
};

interface Props {
  createTicket: (ticket: INewTicket) => void;
  createNewTicket: () => void;
}

const TicketButtons = ({
  createTicket = () => {},
  createNewTicket = () => {},
}: Props) => {
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
          sx={styles.createRandomButton}
          variant="contained"
          onClick={handleCreateNewTicket}
          endIcon={<NavigateNextIcon />}
        >
          Create Randomly
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={styles.createNewButton}
          variant="contained"
          onClick={createNewTicket}
          endIcon={<NavigateNextIcon />}
        >
          Create new
        </Button>
      </Grid>
    </Grid>
  );
};

export default TicketButtons;
