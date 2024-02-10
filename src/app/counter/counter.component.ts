import {Component, input, model, OnInit} from "@angular/core";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'signal-counter',
  styleUrl: './counter.component.scss',
  template: `
      <div class="counter">

          <div>Counter value: {{ count() }}</div>

          <button mat-raised-button color="accent"
                  (click)="onIncrement()">
              Increment
          </button>
      </div>
  `,
  imports: [MatButton],
  standalone: true
})
export class CounterComponent {

  count = model(0);

  onIncrement() {
    this.count.update(val => val + 1);
  }

}
