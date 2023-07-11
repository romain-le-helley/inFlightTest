import "./App.css";
import TicketProvider from "./containers/Providers/TicketProvider";
import Tickets from "./containers/Tickets/Tickets";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TicketProvider>
          <Container sx={{ p: 2, display: "flex", flex: 1 }}>
            <Tickets />
          </Container>
        </TicketProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
