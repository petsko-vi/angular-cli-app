import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component implements OnInit {
    @Input() userName: string;
    //@Input() userAge: number;
    _userAge: number;
    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
    }
    get userAge() { return this._userAge; }

  constructor() { }

  ngOnInit() {
  }

}
