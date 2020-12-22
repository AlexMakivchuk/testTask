import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Output() clearString = new EventEmitter<string>();
  constructor() { }

  clearInput(): void {
    this.clearString.emit();
  }

  ngOnInit(): void {
  }

}
