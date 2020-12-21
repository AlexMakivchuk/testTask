import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() name: string;
  @Output() clearString = new EventEmitter<string>();
  constructor() { }

  clearInput(value: string): void {
    this.clearString.emit(value);
  }

  ngOnInit(): void {
  }

}
