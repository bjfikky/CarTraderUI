import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makes-filter',
  templateUrl: './makes-filter.component.html',
  styleUrls: ['./makes-filter.component.css']
})
export class MakesFilterComponent implements OnInit {
  date: Date;

  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
  }

}
