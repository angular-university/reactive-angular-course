import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Lesson} from '../model/lesson';
import {map, shareReplay, tap} from 'rxjs/operators';


@Injectable()
export class SearchLessonsStore {

  lessons$: Observable<Lesson[]>;

  private subject = new BehaviorSubject<Lesson[]>([]);

  constructor(private http:HttpClient) {

    this.lessons$ = this.subject.asObservable();
  }

  searchLessons(courseId:string, search:string) {
     return this.http.get(`/api/lessons?courseId=${courseId}&pageSize=100&filter=${search}`)
      .pipe(
        map(res => res["payload"]),
        tap(lessons => this.subject.next(lessons)),
        shareReplay()
      );
  }

}
