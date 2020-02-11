import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MessagesService} from './messages.service';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]>;

  showMessages = false;

  constructor(private messagesService: MessagesService) {

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
