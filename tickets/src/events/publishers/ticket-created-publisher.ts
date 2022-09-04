import { Publisher, Subjects, TicketCreatedEvent } from "@benjaoholeguytickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
