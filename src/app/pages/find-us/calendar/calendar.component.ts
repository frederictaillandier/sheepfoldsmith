import {Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent  {
    view: CalendarView = CalendarView.Month;

    viewDate: Date = new Date();

    events: CalendarEvent[] = [
        {
            title: 'Click me',
            start: new Date(),
        },
        {
            title: 'Or click me',
            start: new Date(),
        },
    ];

    eventClicked({ event }: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
    }
}
