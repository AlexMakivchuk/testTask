import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
  },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: {color: 'accent'},
    }
  ]
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {
  disabled: boolean;
  controll = new FormControl();
  onChange;
  onTouched;

  constructor() {
  }

  ngOnInit(): void {
    this.controll.valueChanges.subscribe(val => {
      if (this.onChange) {
        this.onChange(val);
      }
    });
  }

  writeValue(value): void {
    this.controll.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
