import { Course } from './../model/course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];
  constructor() { }

  ngOnInit(): void {
  }

}
