import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {map, shareReplay} from 'rxjs/operators';
import {Lesson} from '../model/lesson';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses')
      .pipe(
        map(response => response['payload']),
        shareReplay()
      );
  }

  loadCourseById(courseId: number) {
    return this.http.get<Course>(`/api/courses/${courseId}`)
      .pipe(
        shareReplay()
      );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http.put(`/api/courses/${courseId}`, changes)
      .pipe(
        map(response => response['payload']),
        shareReplay()
      );
  }

  loadAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`/api/lessons?courseId=${courseId}&pageSize=100&filter=`)
      .pipe(
        map(response => response['payload']),
        shareReplay()
      );
  }
}
