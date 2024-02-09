import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {ActivatedRoute,} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses: Course[];

  advancedCourses: Course[];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.beginnerCourses = this.route.snapshot.data['home'].beginnerCourses;

    this.advancedCourses = this.route.snapshot.data['home'].advancedCourses;

  }


  onModify() {

    const newCourses = [...this.beginnerCourses];

    newCourses[0] = {
      ...newCourses[0],
      description: "Angular Core Deep Dive"
    }

    this.beginnerCourses = newCourses;

  }

}























