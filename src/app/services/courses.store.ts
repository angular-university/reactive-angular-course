import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn:'root'
})
export class CoursesStore {

  private subject = new BehaviorSubject<Course[]>([]);

  courses$ = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    this.http.get<Course[]>('/api/courses')
      .pipe(
        map(response => response["payload"]),
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

  private updateCourse(courseId:string, changes: Partial<Course>) {

    const courses = this.subject.getValue();

    const index = courses.findIndex(course => course.id == courseId);

    const newCourse = {
      ...courses[index],
      changes
    };



  }

}
