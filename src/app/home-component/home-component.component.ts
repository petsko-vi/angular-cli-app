import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

    nameForComponent1="nameForComponent1";
    nameForComponent2="nameForComponent2";
    ageForComponent2="ageForComponent2";

    clicks:number = 0;

    nameForComponent4="nameForComponent4";
    //name="home-component-name";
    //name:string="Tom home-component-name";
    //age:number = 24;
    //clicks:number = 0;
    //onChanged(increased){
    //    increased==true?this.clicks++:this.clicks--;
    //}
    //name1: string = "Tom";

  constructor() { }

    onChanged(increased){
        increased==true?this.clicks++:this.clicks--;
    }

  ngOnInit() {
  }


}
