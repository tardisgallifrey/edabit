import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Batter Average in Angular';

  hits: number = 0;
  atbats: number = 0;
  total_hits: number = 0;
  total_bats: number = 0;

  AddGame = (hits: number, atbats: number) => {
    this.total_hits += hits;
    this.total_bats += atbats;
  }



  
}
