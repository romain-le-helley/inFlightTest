import { Switch, styled } from "@mui/material";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    color: "#46C3B3",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#A4E1DA",
  },
}));

export default CustomSwitch;
