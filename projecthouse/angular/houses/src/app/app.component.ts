import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Do not forget this is typescript.
  //Type everything
  title: string = 'houses';
  prompt: string = 'Enter a number of matchstick houses: ';
  numHouses: number = 0;

  matchhouses = (steps: number) => {
      if(steps < 1){
        return 0;
      }else if(steps === 1){
        return 6;
      }else{
        return 6 + ((steps - 1) * 5);
      }
  }
}
