import { Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../model/course';
import { Subscription} from 'rxjs';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute,} from "@angular/router";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  beginnerCourses: Course[];

  advancedCourses: Course[];

  beginnerCoursesSubscription: Subscription;

  advancedCoursesSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) {

  }

  ngOnInit() {

    this.beginnerCourses = this.route.snapshot.data.home.beginnerCourses;

    this.advancedCourses = this.route.snapshot.data.home.advancedCourses;

  }

  reloadCourses() {

          this.beginnerCoursesSubscription = this.coursesService.loadCoursesPerCategory("BEGINNER")
            .subscribe(courses => this.beginnerCourses = courses);

          this.advancedCoursesSubscription = this.coursesService.loadCoursesPerCategory("ADVANCED")
            .subscribe(courses => this.advancedCourses = courses);

  }

  ngOnDestroy() {

    this.beginnerCoursesSubscription.unsubscribe();

    this.advancedCoursesSubscription.unsubscribe();

  }

}


