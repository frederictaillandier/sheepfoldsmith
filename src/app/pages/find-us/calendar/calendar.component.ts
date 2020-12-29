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
    events: CalendarEvent[] = [];

    constructor(private sellingPointsService: SellingPointsService) {
        this.events = sellingPointsService.monthEvents;
    }

    eventClicked({ event }: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
    }

    onDateClicked(event: { day: MonthViewDay<any>; sourceEvent: any }): void {
        const eventIds = this.sellingPointsService.getPointsIdForDate(event.day.date);

        this.sellingPointsService.selectableTabs = eventIds;
    }


}
