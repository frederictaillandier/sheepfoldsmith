import {Injectable} from '@angular/core';
import Icon = google.maps.Icon;

@Injectable({
    providedIn: 'root',
})
export class MapMarkerService {

    scaleSizeLarge = new google.maps.Size(60, 60);
    scaleSizeSmall = new google.maps.Size(40, 40);

    icons: { [id: string]: { normal: Icon, selected: Icon} } = {
        sheep: {
            selected: {url: '/assets/images/map-markers/sheep-selected.svg', scaledSize: this.scaleSizeLarge},
            normal: {url: '/assets/images/map-markers/sheep.svg', scaledSize: this.scaleSizeSmall}
        },
        beehive: {
            selected: {url: '/assets/images/map-markers/beehive-selected.svg', scaledSize: this.scaleSizeLarge},
            normal: {url: '/assets/images/map-markers/beehive.svg', scaledSize: this.scaleSizeSmall}
        },
        default: {
            selected: {url: '/assets/images/map-markers/default-selected.svg', scaledSize: this.scaleSizeLarge},
            normal: {url: '/assets/images/map-markers/default.svg', scaledSize: this.scaleSizeSmall}
        },

    };

    public getIcon(id: string | undefined, selected: boolean): Icon {
        if (id && this.icons[id]) {
            return selected ? this.icons[id].selected : this.icons[id].normal;
        }
        return selected ? this.icons.default.selected : this.icons.default.normal;
    }
}
