import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {CoursesService} from '../services/courses.service';
import {CoursesStore} from '../services/courses.store';
import {MessagesService} from '../messages/messages.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;


    constructor(private store: CoursesStore, private messages: MessagesService) {

    }

    ngOnInit() {

      this.beginnerCourses$  = this.store.filterByCategory("BEGINNER");

      this.advancedCourses$  = this.store.filterByCategory("ADVANCED");

    }
}




