import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements  OnInit {

    constructor() {

    }

    ngOnInit() {


    }

  logout() {

  }

}
