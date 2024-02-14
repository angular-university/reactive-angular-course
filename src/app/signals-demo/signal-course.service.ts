import {Injectable, signal} from "@angular/core";
import {Course} from "../model/course";


@Injectable({
  providedIn: 'root'
})
export class SignalCourseService {

  course = signal<Course>({
    id: "100",
    description: 'Angular Core Deep Dive',
    longDescription: 'A detailed walk-through on the core parts of Angular',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/website-images/logos/angular-university-logo-v2.png'
  });

  updateCourseTitle(newTitle: string) {
    this.course.update(course => ({
      ...course,
      description: newTitle
    }))
  }

}
