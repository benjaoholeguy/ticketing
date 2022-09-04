import { Publisher, OrderCreatedEvent, Subjects } from "@benjaoholeguytickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
