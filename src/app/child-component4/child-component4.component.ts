import { Input, Output, EventEmitter,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component4',
  templateUrl: './child-component4.component.html',
  styleUrls: ['./child-component4.component.css']
})
export class ChildComponent4Component implements OnInit {
    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();

  constructor() { }
    onNameChange(model: string){

        this.userName = model;
        this.userNameChange.emit(model);
    }


  ngOnInit() {
  }

}
