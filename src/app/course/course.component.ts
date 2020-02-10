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
  concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {Lesson} from '../model/lesson';
import {createHttpObservable} from '../common/util';
import {CoursesService} from '../services/courses.service';
import {SearchLessonsStore} from './search-lessons.store';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [
    SearchLessonsStore
  ]
})
export class CourseComponent implements OnInit {

  course: Course;

  lessons$: Observable<Lesson[]>;

  activeLesson: Lesson;

  showLessonDetail = false;


  @ViewChild('searchInput') input: ElementRef;

  constructor(private route: ActivatedRoute, private lessonsStore: SearchLessonsStore) {


  }

  ngOnInit() {

    this.course = this.route.snapshot.data['course'];

    this.lessons$ = this.lessonsStore.lessons$;

  }


  onSearch(search: string) {
    this.lessonsStore.searchLessons(this.course.id, search)
      .subscribe();
  }

  openLesson(lesson: Lesson) {
    this.showLessonDetail = true;
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.showLessonDetail = false;
    this.activeLesson = null;
  }
}











