import { Component, EventEmitter,Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component3',
  templateUrl: './child-component3.component.html',
  styleUrls: ['./child-component3.component.css']
})
export class ChildComponent3Component implements OnInit {

  constructor() { }
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased) {
        this.onChanged.emit(increased);
    }

  ngOnInit() {
  }

}
