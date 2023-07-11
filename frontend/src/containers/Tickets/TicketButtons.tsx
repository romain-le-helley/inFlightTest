import { INewTicket } from "../Contexts/TicketContext";
import { Button, Grid, useTheme } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  createTicket: (ticket: INewTicket) => void;
}

const TicketButtons = ({ createTicket = () => {} }: Props) => {
  const theme = useTheme();

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
          sx={{
            backgroundColor: theme.palette.button.main,
            color: theme.palette.white,
          }}
          variant="contained"
          onClick={handleCreateNewTicket}
          endIcon={<NavigateNextIcon />}
        >
          Create Randomly
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            backgroundColor: theme.palette.button.main,
            color: theme.palette.white,
          }}
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
