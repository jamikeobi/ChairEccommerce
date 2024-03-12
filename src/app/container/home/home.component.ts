import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  counter: number = 0;

  @Output()
  increase: EventEmitter<string> = new EventEmitter<string>();

  increaseCounter(){
    this.increase.emit();
  }
}
