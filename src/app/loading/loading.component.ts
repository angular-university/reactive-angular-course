import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$ : Observable<boolean>;

  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {

    this.loading$ = this.loadingService.loading$;
  }


}
