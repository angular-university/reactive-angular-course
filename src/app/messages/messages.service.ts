import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class MessagesService {

  errors$: Observable<string[]>;

  private subject = new BehaviorSubject<string[]>([]);

  constructor() {

    this.errors$ = this.subject.asObservable();

  }




}
