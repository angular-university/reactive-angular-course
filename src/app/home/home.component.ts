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

  beginnerCourses: Course[];

  advancedCourses: Course[];

  constructor(
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.beginnerCourses = data['home'].beginnerCourses;
        this.advancedCourses = data['home'].advancedCourses;
      }
    );

  }


}



















