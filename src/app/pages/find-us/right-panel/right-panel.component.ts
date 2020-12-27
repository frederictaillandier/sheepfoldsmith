import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-find-us-panel',
    templateUrl: 'right-panel.component.html',
    styleUrls: ['right-panel.component.scss']
})
export class RightPanelComponent {
    @Input()
    title = 'MISSING TITLE';

    @Input()
    description = 'LoremIpsum';
}
