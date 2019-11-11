import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToDetails(listingId: string) {
        this.router.navigate([`listings/${listingId}`])
    }
}
