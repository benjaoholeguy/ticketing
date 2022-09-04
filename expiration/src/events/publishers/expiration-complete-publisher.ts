import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@benjaoholeguytickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
