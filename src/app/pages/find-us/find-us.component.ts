import {Component} from '@angular/core';
import {SellingPoint, SellingPointsService} from '../../services/selling-points.service';




@Component({
    templateUrl: './find-us.component.html',
    styleUrls: ['./find-us.component.scss']
})
export class FindUsComponent {

    constructor(private sellingPointsService: SellingPointsService) {
    }

    public get sellingPoints(): SellingPoint[] {
        return this.sellingPointsService.sellingPoints;
    }

    public get selectedId(): number {
        return this.sellingPointsService.currentSelectedIndex;
    }

}
