import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {RadioButtonComponent} from './components/radio-button/radio-button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    InputComponent,
    RadioButtonComponent
  ],
  exports: [
    InputComponent,
    RadioButtonComponent,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
