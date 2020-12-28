import {Component, Input, OnInit} from '@angular/core';
import {SellingPoint, SellingPointsService} from '../../../services/selling-points.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {

    markers: SellingPoint[] = [];

    lat = 48.402199962615164;
    lng = -1.0382391904184438;

    constructor(private sellingPointsService: SellingPointsService) {
        this.markers = this.sellingPointsService.sellingPoints;
    }

    public markerClicked(marker: SellingPoint): void {
        if (marker.id !== undefined) {
            this.sellingPointsService.setCurrentSelectedIndex(marker.id);
        }
    }

    public makeIcon(point: SellingPoint): any {

        const isSelected = this.sellingPointsService.currentSelectedPoint.id === point.id && point.id !== undefined;

        const size = isSelected ? 40 : 30;

        const result = {
            url: point.icon ? point.icon : '',
            scaledSize: new google.maps.Size(size, size)
        };
        return result;
    }


}
