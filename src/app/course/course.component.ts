import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll, shareReplay, catchError
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat, throwError, combineLatest} from 'rxjs';
import {Lesson} from '../model/lesson';
import {CoursesService} from '../services/courses.service';


interface CourseData {
    course: Course;
    lessons: Lesson[];
}


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;

  lessons: Lesson[];

  courseId:number;







   ngOnInit() {

    this.course = this.route.snapshot.data.home.course;
    this.lessons = this.route.snapshot.data.home.lessons;
  }




















  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) {

    this.courseId = parseInt(this.route.snapshot.paramMap.get("courseId"));

  }






}











