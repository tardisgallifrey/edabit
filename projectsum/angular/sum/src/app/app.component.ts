//This is the standard set up for a typescript
//class to run the script portion of Angular
import { Component } from '@angular/core';

//These statements form an object showing 
//where all our parts connect
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//This is our component's class
export class AppComponent {

  //These are class properties
  //variables in our component
  title = 'Return a value from a function';

  //Because I don't want to set these to zero,
  //so that the placeholder will be visible,
  //the ! is required or else typescript complains
  //of an undefined variable
  num1!: number;
  num2!: number;

  //Our edabit function
  //typescript wants everything typed,
  //thus the colons and number
  sum(a: number, b: number): number {
    return a + b;
  }
}
