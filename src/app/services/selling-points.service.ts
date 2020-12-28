import {Injectable} from '@angular/core';

export class SellingPoint {
    id = 0;
    title = 'title';
    description = 'LoremIpsum';
    lat = 0;
    lng = 0;
}


@Injectable({
    providedIn: 'root',
})
export class SellingPointsService {

    selectedShopIndex = 0;

    sellingPoints: SellingPoint[] = [
        {
            id: 0,
            title: 'Shop.Sheepfold.Title',
            description: 'LoremIpsum',
            lat: 48.402199962615164,
            lng: -1.0382391904184438
        },
        {
            id: 1,
            title: 'Shop.LicesMarket.Title',
            description: 'LoremIpsum',
            lat: 48.1115364,
            lng: -1.6943075
        },
        {
            id: 2,
            title: 'Shop.BeeHouse1.Title',
            description: 'LoremIpsum',
            lat: 48.1124221,
            lng: -1.6863243
        },
        {
            id: 3,
            title: 'Shop.BeeHouse2.Title',
            description: 'LoremIpsum',
            lat: 48.1355746,
            lng: -1.6703714
        },
        {
            id: 4,
            title: 'Shop.BeeHouse3.Title',
            description: 'LoremIpsum',
            lat: 48.0952684,
            lng: -1.6526013
        },
        {
            id: 5,
            title: 'Shop.Locavore.Title',
            description: 'LoremIpsum',
            lat: 48.4226630,
            lng: -0.7919856
        }
    ];

    public get shops(): SellingPoint[] {
        return this.sellingPoints;
    }

    public setCurrentSelectedIndex(index: number): void {
        this.selectedShopIndex = index;
    }

}
