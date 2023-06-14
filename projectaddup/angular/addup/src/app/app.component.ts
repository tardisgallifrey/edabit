import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'addup';
  value = 0; //ngModel for input
  answer = 0; //results sum

  Calculate = (num1: number) :number => {
        //needs resetting so other calls 
        //don't keep adding up
        this.answer=0;

        //check to make sure it is in range
        if(num1 > 0 && num1 < 1001){

          //do if true
          for(let i = 1; i <= num1; i++){
            this.answer += i;
          }
          return this.answer;
        }else{
          //do if false (greater than 1000)
          return -1;
        }
  }
}
