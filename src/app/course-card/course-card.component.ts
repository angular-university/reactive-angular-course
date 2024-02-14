import {Component, effect, inject, input} from "@angular/core";
import {Course} from "../model/course";
import {SignalCourseService} from "../signals-demo/signal-course.service";


@Component({
  selector: "course-card",
  template: `
    <div class = "course">
      <h3>{{ courseService.course().description }}</h3>
      <h4>{{courseService.course().longDescription}}</h4>
      <img [src]="courseService.course().iconUrl">
    </div>
  `,
  standalone: true
})
export class CourseCardComponent {

  courseService = inject(SignalCourseService);

  constructor() {

    effect(() => {

      console.log(
        `CourseCardComponent received new course:`,
        this.courseService.course()
      )

    })

  }

}
