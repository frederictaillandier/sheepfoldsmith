import {Component, Input} from '@angular/core';
import {SellingPoint, SellingPointsService} from '../../../services/selling-points.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {
    @Input()
    markers: SellingPoint[] = [];

    lat = 48.402199962615164;
    lng = -1.0382391904184438;

    constructor(private sellingPointsService: SellingPointsService) {
    }

    public markerClicked(marker: SellingPoint): void {
        this.sellingPointsService.setCurrentSelectedIndex(marker.id);
    }
}
