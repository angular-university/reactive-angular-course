
                                  import {CounterComponent} from "../counter/counter.component";
                                  import {
                                    Component,signal
                                  } from "@angular/core";


                                  @Component({
                                    selector: 'signals-demo',
                                    styleUrl: './signals-demo.component.scss',
                                    template: `<counter [counter]="count()" />
                                    <button (click)="onIncrement()">
                                        Increment
                                    </button>`,
                                    standalone: true,
                                    imports: [CounterComponent]
                                  })
                                  export class SignalsDemoComponent  {

                                    count = signal(0);

                                    onIncrement() {

                                      this.count.update(val => val + 1);
                                    }

                                  }





