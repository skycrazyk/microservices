import { Listener, OrderCreatedEvent, Subjects } from '@skycrazyk/gittix'
import { queueGroupName } from './queue-group-name'
import { Message } from 'node-nats-streaming'
import { Ticket } from '../../models/ticket'

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated
    queueGroupName = queueGroupName

    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
        // Find the tickt that the order id reserving
        const ticket = await Ticket.findById(data.ticket.id)

        // If no ticket, throw error
        if (!ticket) {
            throw new Error('Ticket not found')
        }

        // Mark the ticket as being resrved by setting its orderId property
        ticket.set({ orderId: data.id })

        // Save the ticket
        await ticket.save()

        // ack the message
        msg.ack()
    }
}
