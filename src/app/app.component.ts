import {Component, effect, inject, OnInit} from '@angular/core';
import {LoadingService} from './loading/loading.service';
import {MessagesService} from './messages/messages.service';
import {AuthStore} from './services/auth.store';
import {SignalCourseService} from "./signals-demo/signal-course.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courseService = inject(SignalCourseService);

  constructor() {

    effect(() => {

      console.log(
        `HomeComponent received new course:`,
        this.courseService.course()
      )

    })

  }

}
