
import {CounterComponent} from "../counter/counter.component";
import {
  Component,signal
} from "@angular/core";
import {CourseCardComponent} from "../course-card/course-card.component";
import {Course} from "../model/course";
import {SignalCourseService} from "./signal-course.service";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'signals-demo',
  styleUrl: './signals-demo.component.scss',
  template: `

  <course-card />

  <button mat-raised-button color="primary"
    (click)="updateCourse()">
      Modify Course
  </button>`,
  standalone: true,
  imports: [CounterComponent, CourseCardComponent, MatButton]
})
export class SignalsDemoComponent  {

  constructor(private courseService: SignalCourseService) {

  }

  updateCourse() {

    this.courseService.updateCourseTitle('New Title');
  }
}





