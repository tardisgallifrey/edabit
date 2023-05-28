import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bitwise';
  a = 0;
  b = 0;
  toggle = false;

  resultAND = 0;
  resultOR = 0;
  resultXOR = 0;

  bitwiseAND(a: number, b: number):number{
    return a&b;
  }

  bitwiseOR(a: number, b: number):number{
    return a|b;
  }

  bitwiseXOR(a: number, b: number):number{
    return a^b;
  }

  getAnswers(a: number, b:number){
    this.toggle = !this.toggle;
    this.resultAND = this.bitwiseAND(a, b);
    this.resultOR = this.bitwiseOR(a, b);
    this.resultXOR = this.bitwiseXOR(a, b);
  }
}
