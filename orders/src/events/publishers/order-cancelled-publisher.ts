import { Subjects, Publisher, OrderCancelledEvent } from "@benjaoholeguytickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
