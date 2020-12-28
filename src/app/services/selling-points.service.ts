import {Injectable} from '@angular/core';
import {CalendarEvent} from 'angular-calendar';

export class SellingPoint {
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    lat: number | undefined;
    lng: number | undefined;
    icon: string | undefined;
    dayOfTheWeek: number | undefined; // leave undefined if non recurrent
    startDate: Date | undefined; // only using hour if recurrent
    endDate: Date | undefined; // only using hour if recurrent
}

@Injectable({
    providedIn: 'root',
})
export class SellingPointsService {

    private _selectedSellingPointIndex = 0;
    public get currentSelectedPoint(): SellingPoint {
        return this.points[this._selectedSellingPointIndex];
    }

    private points: SellingPoint[] = [
        {
            id: 0,
            title: 'Shop.Sheepfold.Title',
            description: 'Shop.Sheepfold.Description',
            lat: 48.402199962615164,
            lng: -1.0382391904184438,
            icon: '/assets/images/sheep.svg',
            dayOfTheWeek: undefined,
            startDate: undefined,
            endDate: undefined
        },
        {
            id: 1,
            title: 'Shop.LicesMarket.Title',
            description: 'LoremIpsum',
            lat: 48.1115364,
            lng: -1.6943075,
            icon: '',
            dayOfTheWeek: 6,
            startDate: new Date(2020, 0, 0, 7),
            endDate: new Date(2020, 0, 0, 13)
        },
        {
            id: 2,
            title: 'Shop.BeeHouse1.Title',
            description: 'Shop.BeeHouse1.Description',
            lat: 48.1124221,
            lng: -1.6863243,
            icon: '/assets/images/beehive.svg',
            dayOfTheWeek: 1,
            startDate: new Date(2020, 0, 0, 18, 30),
            endDate: new Date(2020, 0, 0, 20)
        },
        {
            id: 3,
            title: 'Shop.BeeHouse2.Title',
            description: 'Shop.BeeHouse2.Description',
            lat: 48.1355746,
            lng: -1.6703714,
            icon: '/assets/images/beehive.svg',
            dayOfTheWeek: 3,
            startDate: new Date(2020, 0, 0, 17),
            endDate: new Date(2020, 0, 0, 19)
        },
        {
            id: 4,
            title: 'Shop.BeeHouse3.Title',
            description: 'Shop.BeeHouse3.Description',
            lat: 48.0952684,
            lng: -1.6526013,
            icon: '/assets/images/beehive.svg',
            dayOfTheWeek: 3,
            startDate: new Date(2020, 0, 0, 17),
            endDate: new Date(2020, 0, 0, 19)
        },
        {
            id: 5,
            title: 'Shop.Locavore.Title',
            description: 'LoremIpsum',
            lat: 48.4226630,
            lng: -0.7919856,
            icon: '',
            dayOfTheWeek: 5,
            startDate: new Date(2020, 0, 0, 17),
            endDate: new Date(2020, 0, 0, 19)
        }
    ];



    private _monthEvents: CalendarEvent[] = [];
    public get monthEvents(): CalendarEvent[] {
        return this._monthEvents;
    }

    public get sellingPoints(): SellingPoint[] {
        return this.points;
    }


    public setCurrentSelectedIndex(index: number): void {
        this._selectedSellingPointIndex = index;
    }

    constructor() {
        this.GenerateMonthEvents();
    }

    private GenerateMonthEvents(): void {
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const dayInMilliSeconds = 24 * 60 * 60 * 1000;
        const lastPossibleIteration = new Date(firstDayOfMonth.getTime() + (30 + 7) * dayInMilliSeconds);

        const result: CalendarEvent[] = [];
        this.points.reduce<CalendarEvent[]>((accumulator, point) => {
            if (point.dayOfTheWeek === undefined) {
                return accumulator;
            }
            // const accResult: CalendarEvent[] = [];
            const decalToFirstDelivery = (firstDayOfMonth.getDay() + 7 - point.dayOfTheWeek) % 7;
            let sellingIterator = new Date(firstDayOfMonth.getTime() - decalToFirstDelivery * dayInMilliSeconds);

            while (sellingIterator < lastPossibleIteration) {
                const deliveryEvent: CalendarEvent = {
                    title: 'Dummy Title',
                    start: new Date(sellingIterator.getFullYear(), sellingIterator.getMonth(),
                        sellingIterator.getDate(), point.startDate?.getHours(), point.startDate?.getMinutes()),
                    end: new Date(sellingIterator.getFullYear(), sellingIterator.getMonth(),
                        sellingIterator.getDate(), point.endDate?.getHours(), point.endDate?.getMinutes())
                };
                result.push(deliveryEvent);
                sellingIterator = new Date(sellingIterator.getTime() + 7 * dayInMilliSeconds);
            }
            return accumulator;
        }, this._monthEvents);
        this._monthEvents = result;
    }

    public getEventIdForDate(date: Date): number {
        for (const point of this.points)
        {
            if (date.getDay() === point.dayOfTheWeek && point.id)
            {
                return point.id;
            }
        }
        return 0;
    }
}
