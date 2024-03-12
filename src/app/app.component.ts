import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChairEcommerceAngular';

  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }
}
