import {Injectable} from '@angular/core';
import Icon = google.maps.Icon;

@Injectable({
    providedIn: 'root',
})
export class MapMarkerService {

    icons: { [id: string]: { normal: Icon, selected: Icon} } = {
        sheep: {
            selected: {url: '/assets/images/map-markers/sheep-selected.svg', scaledSize: new google.maps.Size(60, 60)},
            normal: {url: '/assets/images/map-markers/sheep.svg', scaledSize: new google.maps.Size(40, 40)}
        },
        beehive: {
            selected: {url: '/assets/images/map-markers/beehive-selected.svg', scaledSize: new google.maps.Size(60, 60)},
            normal: {url: '/assets/images/map-markers/beehive.svg', scaledSize: new google.maps.Size(40, 40)}
        },
        default: {
            selected: {url: '/assets/images/map-markers/default-selected.svg', scaledSize: new google.maps.Size(60, 60)},
            normal: {url: '/assets/images/map-markers/default.svg', scaledSize: new google.maps.Size(40, 40)}
        },

    };

    public getIcon(id: string | undefined, selected: boolean): Icon {
        if (id && this.icons[id]) {
            return selected ? this.icons[id].selected : this.icons[id].normal;
        }
        return selected ? this.icons.default.selected : this.icons.default.normal;
    }
}
