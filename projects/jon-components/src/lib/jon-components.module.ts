import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JonComponentsComponent } from './jon-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [JonComponentsComponent, CheckboxComponent, TextinputComponent, DynamicFormComponent],
  exports: [JonComponentsComponent, CheckboxComponent, TextinputComponent, DynamicFormComponent]
})
export class JonComponentsModule { }
