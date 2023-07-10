import * as ticketModel from "../../models/ticketsModel";
import { NextFunction, Request, Response } from "express";

const generateRandomText = (clientNameLength: number): String => {
  let clientName = "";
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
  const alphabetLength = alphabet.length;
  for (let i = 0; i < clientNameLength; i++) {
    clientName += alphabet.charAt(Math.floor(alphabetLength * Math.random()));
  }
  return clientName;
};

const generateRandomDeadline = (): Date => {
  const startDate = new Date().setDate(new Date().getDate() - 2);
  const endDate = new Date().setDate(new Date().getDate() + 2);

  const randomDate = new Date(
    startDate + Math.random() * (endDate - startDate)
  );

  return randomDate;
};

const createNewTicket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { client, issue, deadline } = req?.body;

    const newTicketInput: ticketModel.ITicket = {
      client: client ? client : generateRandomText(5),
      issue: issue ? issue : generateRandomText(40),
      deadline: deadline ? deadline : generateRandomDeadline(),
    };

    const newTicket = await ticketModel.createNewTicket(newTicketInput);

    return res.status(200).json(newTicket);
  } catch (error) {
    next(error);
  }
};

const getAllTickets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allTickets = await ticketModel.getTickets();

    return res.status(200).json(allTickets);
  } catch (error) {
    next(error);
  }
};

const changeTicketStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;

    const updatedTicket = await ticketModel.changeStatus(id);

    if (!updatedTicket) {
      return res.status(400).send("Provide an existing id");
    }

    return res.status(200).json(updatedTicket);
  } catch (error) {
    next(error);
  }
};

export { createNewTicket, getAllTickets, changeTicketStatus };
