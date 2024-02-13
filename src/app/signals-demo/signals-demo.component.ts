
import {CounterComponent} from "../counter/counter.component";
import {
  Component,signal
} from "@angular/core";
import {CourseCardComponent} from "../course-card/course-card.component";


@Component({
  selector: 'signals-demo',
  styleUrl: './signals-demo.component.scss',
  template: `

  <course-card [course]=""/>

  <button (click)="onIncrement()">
      Increment
  </button>`,
  standalone: true,
  imports: [CounterComponent, CourseCardComponent]
})
export class SignalsDemoComponent  {

  count = signal(0);

  onIncrement() {

    this.count.update(val => val + 1);
  }

}





