import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './app-input-button-unit.component.html',
  styleUrls: ['./app-input-button-unit.component.css']
})
export class AppInputButtonUnitComponent implements OnInit {
  title: string = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  constructor() { }

  ngOnInit() {
  }

}
