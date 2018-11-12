import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JonComponentsModule } from 'jon-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
