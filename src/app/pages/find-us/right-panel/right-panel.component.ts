import {Component, Input} from '@angular/core';
import {SellingPointsService} from '../../../services/selling-points.service';

@Component({
    selector: 'app-find-us-panel',
    templateUrl: 'right-panel.component.html',
    styleUrls: ['right-panel.component.scss']
})
export class RightPanelComponent {

    activeTabIndex = 0;

    constructor(private sellingPointsService: SellingPointsService) {
    }

    get title(): string  {
        const result = this.sellingPointsService.currentSelectedPoint.title;
        return result !== undefined ? result : '';
    }

    get description(): string {
        const result = this.sellingPointsService.currentSelectedPoint.description;
        return result !== undefined ? result : '';
    }

    get tabsIcons(): string[] {
        const result = this.sellingPointsService.sellingPoints
            .filter(point => this.sellingPointsService.selectableTabs.includes(point.id))
            .map(point => point.icon);
        return result;
    }

    public selectTab(index: number): void {
        this.sellingPointsService.setCurrentSelectedIndex(index);
    }

}
