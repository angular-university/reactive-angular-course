import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';
import {MessagesService} from './messages.service';

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MessagesComponent implements OnInit {

  showMessages = false;

  errors$: Observable<string[]>;


  constructor(public messagesService: MessagesService) {

      console.log("Created messages component");

  }

  ngOnInit() {
      this.errors$ = this.messagesService.errors$
          .pipe(
              tap(() => this.showMessages = true)
          );

  }


  onClose() {
      this.showMessages = false;

  }

}
