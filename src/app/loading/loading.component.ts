import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  constructor(public LoadingService: LoadingService) {

  }

  ngOnInit() {

  }


}
