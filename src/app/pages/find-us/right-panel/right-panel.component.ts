import {Component, Input} from '@angular/core';
import {SellingPointsService} from '../../../services/selling-points.service';

@Component({
    selector: 'app-find-us-panel',
    templateUrl: 'right-panel.component.html',
    styleUrls: ['right-panel.component.scss']
})
export class RightPanelComponent {

    constructor(private sellingPointsService: SellingPointsService) {
    }


    get title(): string {
        return this.sellingPointsService.sellingPoints[this.sellingPointsService.selectedShopIndex].title;
    }

}
