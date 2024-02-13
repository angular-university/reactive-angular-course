import {Injectable, signal} from "@angular/core";
import {Course} from "../model/course";


@Injectable({
  providedIn: 'root'
})
export class SignalCourseService {

  #course: Course = {
    id: "100",
    description: 'Angular Core Deep Dive',
    longDescription: 'A detailed walk-through on Angular Core',
    iconUrl: 'https://angular-university.s3.amazonaws.com/main-logo.png'
  }

  course = signal(this.#course);

  updateCourseTitle(newTitle: string) {
    this.course.update(course => ({
      ...course,
      description: newTitle
    }))
  }

}
