import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//We imported FormsModule so that things 
//used in forms, like inputs, wouild work correctly
import { FormsModule } from '@angular/forms';

//Angular does this when you generate the component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //not only do we import the module above,
    //we declare it as an import here.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
