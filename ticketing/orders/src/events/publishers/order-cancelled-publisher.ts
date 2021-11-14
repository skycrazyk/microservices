import { Publisher, OrderCancelledEvent, Subjects } from '@skycrazyk/gittix'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled
}
