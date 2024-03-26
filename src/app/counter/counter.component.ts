import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input()
  count: number = 0;
  @Input()
  price: number = 0;
  @Output('update')
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
    }

  decrement() {
    if(this.count != 1)
    this.count--;
    this.change.emit(this.count);
  }
}
