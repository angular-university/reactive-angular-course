import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {catchError, map, shareReplay} from 'rxjs/operators';
import {MessagesService} from '../messages/messages.service';


@Injectable({
  providedIn:'root'
})
export class CoursesStore {

  private subject = new BehaviorSubject<Course[]>([]);

  courses$ = this.subject.asObservable();

  constructor(private http: HttpClient, private messages: MessagesService) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    this.http.get<Course[]>('/api/courses')
      .pipe(
        map(response => response["payload"]),
        catchError(err => {
          const message = "Could not not load courses";
          this.messages.showErrors(message);
          console.log(message, err);
          return throwError(err);
        })
      )
      .subscribe(
        courses => this.subject.next(courses)
      );
  }

  filterByCategory(category:string): Observable<Course[]> {
    return this.courses$
      .pipe(
        map(courses => courses.filter(course => course.category == category).sort(sortCoursesBySeqNo))
      );
  }

  saveCourse(courseId:string, changes: Partial<Course>) {

    const courses = this.subject.getValue();

    const index = courses.findIndex(course => course.id == courseId);

    const newCourse = {
      ...courses[index],
      ...changes
    };

    const newCourses = courses.slice(0);

    newCourses[index] = newCourse;

    this.subject.next(newCourses);

    return this.http.put(`/api/courses/${courseId}`, changes)
      .pipe(
        shareReplay()
      );

  }

}
