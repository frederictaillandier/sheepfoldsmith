import {Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, OnInit, OnDestroy, EventEmitter} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {DOCUMENT} from '@angular/common';
import {MonthViewDay} from 'calendar-utils';
import {SellingPointsService} from '../../../services/selling-points.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent {
    view: CalendarView = CalendarView.Month;

    viewDate: Date = new Date();


/*
    events: CalendarEvent[] = [
        {
            title: 'LicesMarket',
            start: new Date(2020, 11, 5, 7),
            end: new Date(2020, 11, 5, 13),
        },
        {
            title: 'LicesMarket',
            start: new Date(2020, 11, 12, 7),
            end: new Date(2020, 11, 12, 13),
        },
        {
            title: 'LicesMarket',
            start: new Date(2020, 11, 19, 7),
            end: new Date(2020, 11, 19, 13),
        },
        {
            title: 'LicesMarket',
            start: new Date(2020, 11, 26, 7),
            end: new Date(2020, 11, 26, 13),
        },
        {
            title: 'Or click me',
            start: new Date(),
        },
    ];
*/
    events: CalendarEvent[] = [];

    private readonly darkThemeClass = 'dark-theme';
    constructor(private sellingPointsService: SellingPointsService) {
        this.events = sellingPointsService.monthEvents;
    }

    eventClicked({ event }: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
    }

    onDateClicked(event: { day: MonthViewDay<any>; sourceEvent: any }): void {
        const eventId = this.sellingPointsService.getEventIdForDate(event.day.date);

        this.sellingPointsService.setCurrentSelectedIndex(eventId);
    }


}
