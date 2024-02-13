import {Component, input} from "@angular/core";
import {Course} from "../model/course";


@Component({
  selector: "course-card",
  styleUrl: "./course-card.component.scss",
  template: `<div class = "course">
    <h2>{{ course().description }}</h2>
    <h2>{{course().longDescription}}</h2>
    <img [src]="course().iconUrl"></img>
  </div>`,
  standalone: true
})
export class CourseCardComponent {

  course = input<Course>();

}
