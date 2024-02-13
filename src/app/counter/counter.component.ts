import {Component, input, model, OnInit} from "@angular/core";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'counter',
  styleUrl: './counter.component.scss',
  template: `
      <div class="counter">

          <div>Counter value: {{ counter() }}</div>

      </div>
  `,
  imports: [MatButton],
  standalone: true
})
export class CounterComponent {

  counter = input(0);

}
