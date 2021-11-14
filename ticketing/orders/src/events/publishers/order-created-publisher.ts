import { Publisher, OrderCreatedEvent, Subjects } from '@skycrazyk/gittix'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated
}
