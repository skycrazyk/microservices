import { Publisher, Subjects, TicketCreatedEvent } from '@skycrazyk/gittix'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated
}
