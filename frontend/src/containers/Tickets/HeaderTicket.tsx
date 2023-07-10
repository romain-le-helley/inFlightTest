import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Box, Typography } from "@mui/material";

interface Props {}

const HeaderTicket = ({}: Props) => {
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          border: 1,
          borderRadius: 2,
          borderColor: "#CEE3F6",
          alignItems: "center",
          display: "flex",
          p: 1,
          mr: 2,
        }}
      >
        <EventAvailableIcon sx={{ color: "#1D4770" }} />
      </Box>
      <Typography variant="h6">Timeline</Typography>
    </Box>
  );
};

export default HeaderTicket;
