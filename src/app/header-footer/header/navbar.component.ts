import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(private router: Router) {
    }

    isNavbarCollapsed = true;
    showTitle(): boolean {
        return !this.router.url.includes('landing');
    }
}
