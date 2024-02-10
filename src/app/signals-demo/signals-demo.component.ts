
import {CounterComponent} from "../counter/counter.component";

import {
  model,
  viewChild,
  viewChildren,
  contentChild,
  contentChildren,
  Component,
  effect, ViewChild, AfterViewInit
} from "@angular/core";

@Component({
  selector: 'signals-demo',
  styleUrl: './signals-demo.component.scss',
  template: `
<p>Parent counter: {{parentCounter}}</p>

<signal-counter  [(count)]="parentCounter" />

`,
  standalone: true,
  imports: [CounterComponent]
})
export class SignalsDemoComponent  {

  parentCounter = 100;

}





