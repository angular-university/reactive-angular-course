import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
import {merge, fromEvent, Observable, concat, throwError} from 'rxjs';
import {Lesson} from '../model/lesson';
import {createHttpObservable} from '../common/util';
import {CoursesService} from '../services/courses.service';
import {SearchLessonsStore} from './search-lessons.store';
import {MessagesService} from '../messages/messages.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [
    SearchLessonsStore
  ]
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;

  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService,
              private messages: MessagesService) {


  }

  ngOnInit() {

    const courseId = parseInt(this.route.snapshot.paramMap.get('courseId'));

    this.course$ = this.coursesService.loadCourseById(courseId);

    this.lessons$ = this.coursesService.loadAllCourseLessons(courseId);

  }


}











