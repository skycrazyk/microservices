import { Listener, OrderCreatedEvent, Subjects } from '@skycrazyk/gittix'
import { queueGroupName } from './queue-group-name'
import { Message } from 'node-nats-streaming'

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated
    queueGroupName = queueGroupName

    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {}
}
