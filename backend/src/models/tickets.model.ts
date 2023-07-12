import { Model, Schema, Types, isValidObjectId, model } from "mongoose";

export enum Status {
  open = "open",
  closed = "closed",
}

export interface ITicket {
  client: string;
  issue: string;
  deadline: Date;
  status?: Status;
}

export const TicketShema: Schema<ITicket> = new Schema(
  {
    client: { type: String, required: true },
    issue: { type: String, required: true },
    status: { type: String, default: Status.open },
    deadline: { type: Date, required: false },
  },
  { timestamps: true }
);

export const Ticket: Model<ITicket> = model("Ticket", TicketShema);

export const createNewTicket = async (ticket: ITicket): Promise<ITicket> => {
  return await Ticket.create(ticket);
};

export const getTickets = async (): Promise<ITicket[]> => {
  return await Ticket.find({});
};

export const changeStatus = async (
  ticketId: string
): Promise<ITicket | null> => {
  if (!isValidObjectId(ticketId)) {
    return null;
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    new Types.ObjectId(ticketId),
    [
      {
        $set: {
          status: {
            $cond: [{ $eq: ["$status", "open"] }, Status.closed, Status.open],
          },
        },
      },
    ],
    { runValidators: true, new: true }
  )
    .lean()
    .exec();

  return updatedTicket;
};
