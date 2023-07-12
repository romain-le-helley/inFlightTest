import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Box, Typography, useTheme } from "@mui/material";

const styles = {
  container: {
    width: "max-content",
    display: "flex",
    alignItems: "center",
    mb: 2,
  },
  iconContainer: {
    border: 1,
    borderRadius: 2,
    borderColor: "#CEE3F6",
    alignItems: "center",
    display: "flex",
    p: 1,
    mr: 2,
  },
};

const HeaderTickets = () => {
  const theme = useTheme();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.iconContainer}>
        <EventAvailableIcon sx={{ color: theme.palette.secondary.main }} />
      </Box>
      <Typography variant="h6">Timeline</Typography>
    </Box>
  );
};

export default HeaderTickets;
