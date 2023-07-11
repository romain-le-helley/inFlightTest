import { Box, Modal } from "@mui/material";
import TicketButtons from "./TicketButtons";
import TicketsList from "./TicketsList";
import { ITicketContextType, TicketContext } from "../Contexts/TicketContext";
import { useContext, useState } from "react";
import HeaderTickets from "./HeaderTickets";
import CreateNewTicket from "./CreateNewTicket";

const Tickets = () => {
  const [isCreateTicketModalOpen, setIsCreateTicketModalOpen] =
    useState<boolean>(false);

  const { tickets, createTicket } = useContext(
    TicketContext
  ) as ITicketContextType;

  const handleModalVisibility = () => {
    setIsCreateTicketModalOpen((isOpen) => !isOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        border: 1,
        borderRadius: 2,
        borderColor: "#D8D8D8",
        flex: 1,
      }}
    >
      <Modal open={isCreateTicketModalOpen} onClose={handleModalVisibility}>
        <CreateNewTicket
          createTicket={createTicket}
          closeModal={handleModalVisibility}
        />
      </Modal>
      <HeaderTickets />
      <TicketsList tickets={tickets} />
      <TicketButtons
        createTicket={createTicket}
        createNewTicket={handleModalVisibility}
      />
    </Box>
  );
};

export default Tickets;
