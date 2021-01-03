import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-booking-button',
    templateUrl: './booking-button.component.html',
    styleUrls: ['./booking-button.component.scss']
})
export class BookingButtonComponent {
    @Input()
    public iconUrl!: string;

    @Input()
    public title!: string;

    @Input()
    public description!: string;

    @Input()
    public clickUrl!: string;
}
