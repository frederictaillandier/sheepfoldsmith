import {Component, Input, OnInit} from '@angular/core';
import {SellingPoint, SellingPointsService} from '../../../services/selling-points.service';
import Icon = google.maps.Icon;
import Size = google.maps.Size;
import {MapMarkerService} from '../../../services/map-marker.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {

    markers: SellingPoint[] = [];
    lat = 48.402199962615164;
    lng = -1.0382391904184438;

    constructor(private sellingPointsService: SellingPointsService,
                private mapMarkerService: MapMarkerService) {
        this.markers = this.sellingPointsService.sellingPoints;
    }

    public markerClicked(marker: SellingPoint): void {
        if (marker.id !== undefined) {
            this.sellingPointsService.setCurrentSelectedIndex(marker.id);
        }
    }

    public makeIcon(point: SellingPoint): Icon {
        const isSelected = (this.sellingPointsService.currentSelectedIndex === point.id && point.id !== undefined);
        return this.mapMarkerService.getIcon(point.icon, isSelected);
    }

    public getZIndex(point: SellingPoint): number {
        const isSelected = (this.sellingPointsService.currentSelectedIndex === point.id && point.id !== undefined);
        return isSelected ? 1 : 0;
    }

}
