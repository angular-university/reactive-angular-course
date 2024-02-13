import {Component, input} from "@angular/core";
import {Course} from "../model/course";
import {SignalCourseService} from "../signals-demo/signal-course.service";


@Component({
  selector: "course-card",
  template: `
    <div class = "course">
      <p>{{ courseService.course().description }}</p>
      <p>{{courseService.course().longDescription}}</p>
      <img [src]="courseService.course().iconUrl">
    </div>
  `,
  standalone: true
})
export class CourseCardComponent {

  constructor(public courseService: SignalCourseService) {

  }

}
