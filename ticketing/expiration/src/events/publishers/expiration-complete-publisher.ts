import { Subjects, Publisher, ExpirationCompleteEvent } from '@skycrazyk/gittix'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete
}
