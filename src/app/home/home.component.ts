import { Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable, Subscription} from 'rxjs';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute,} from "@angular/router";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) {

  }

  ngOnInit() {

    this.beginnerCourses$ =
      this.coursesService.loadCoursesPerCategory(
        "BEGINNER");

    this.advancedCourses$ =
      this.coursesService.loadCoursesPerCategory(
        "ADVANCED");

  }


}



















