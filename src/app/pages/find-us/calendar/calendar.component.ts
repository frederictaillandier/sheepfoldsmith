import {Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, OnInit, OnDestroy} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, OnDestroy {
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

    private readonly darkThemeClass = 'dark-theme';
    constructor(@Inject(DOCUMENT) private document: any) {}

    eventClicked({ event }: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
    }

    ngOnInit(): void {
        this.document.body.classList.add(this.darkThemeClass);
    }

    ngOnDestroy(): void {
        this.document.body.classList.remove(this.darkThemeClass);
    }
}
