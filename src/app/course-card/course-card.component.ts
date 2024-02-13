import {Component, input} from "@angular/core";
import {Course} from "../model/course";


@Component({
  selector: "course-card",
  template: `
    <div class = "course">
      <p>{{ course().description }}</p>
      <p>{{course().longDescription}}</p>
      <img [src]="course().iconUrl">
    </div>`,
  standalone: true
})
export class CourseCardComponent {

  course = input<Course>();

}
