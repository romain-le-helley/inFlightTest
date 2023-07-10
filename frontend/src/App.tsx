import "./App.css";
import TicketProvider from "./containers/Providers/TicketProvider";
import Tickets from "./containers/Tickets/Tickets";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <TicketProvider>
        <Container sx={{ p: 2, display: "flex", flex: 1 }}>
          <Tickets />
        </Container>
      </TicketProvider>
    </div>
  );
}

export default App;
