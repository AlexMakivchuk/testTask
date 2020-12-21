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
import { ClearButtonComponent } from './components/clear-button/clear-button.component';



@NgModule({
  declarations: [
    InputComponent,
    RadioButtonComponent,
    ClearButtonComponent
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
    ClearButtonComponent,
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
