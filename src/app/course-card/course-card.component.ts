import {Component, effect, inject, input} from "@angular/core";
import {Course} from "../model/course";
import {SignalCourseService} from "../signals-demo/signal-course.service";


@Component({
  selector: "course-card",
  template: `
    <div class = "course">
      <h1>{{ courseService.course().description }}</h1>
      <h2>{{courseService.course().longDescription}}</h2>
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
