import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoadingComponent implements OnInit {


  constructor(public loadingService: LoadingService) {

  }

  ngOnInit() {

  }


}
