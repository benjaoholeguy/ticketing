import { Publisher, Subjects, TicketUpdatedEvent } from "@benjaoholeguytickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
