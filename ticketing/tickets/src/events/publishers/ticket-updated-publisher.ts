import { Publisher, Subjects, TicketUpdatedEvent } from '@skycrazyk/gittix'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated
}
