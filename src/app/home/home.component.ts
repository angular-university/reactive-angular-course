import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {CoursesService} from '../services/courses.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;


    constructor(private courses: CoursesService) {

    }

    ngOnInit() {

      const courses$ = this.courses.loadAllCourses();

      this.beginnerCourses$  = courses$.pipe(map(filterByCategory("BEGINNER")));

      this.advancedCourses$  = courses$.pipe(map(filterByCategory("ADVANCED")));

    }

}

function filterByCategory(category:string) {
  return courses => courses.filter(course => course.category == category).sort(sortCoursesBySeqNo);
}




