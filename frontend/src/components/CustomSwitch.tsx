import { Switch, styled } from "@mui/material";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    color: theme.palette.success.main,
    "& + .MuiSwitch-track": {
      backgroundColor: theme.palette.success.main,
    },
    "&.Mui-checked": {
      color: theme.palette.disabled,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.disabled,
      },
    },
  },
}));

export default CustomSwitch;
