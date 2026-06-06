import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MessagesComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {


  }


  onClose() {


  }

}
