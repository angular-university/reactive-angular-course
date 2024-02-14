
import {CounterComponent} from "../counter/counter.component";
import {
  Component,signal
} from "@angular/core";
import {CourseCardComponent} from "../course-card/course-card.component";
import {Course} from "../model/course";
import {SignalCourseService} from "./signal-course.service";


@Component({
  selector: 'signals-demo',
  styleUrl: './signals-demo.component.scss',
  template: `

  <course-card />

  <button (click)="updateCourse()">
      Modify Course
  </button>`,
  standalone: true,
  imports: [CounterComponent, CourseCardComponent]
})
export class SignalsDemoComponent  {

  constructor(private courseService: SignalCourseService) {

  }

  updateCourse() {

    this.courseService.updateCourseTitle('New Title');
  }
}





