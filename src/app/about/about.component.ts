import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor() { }
  buttonHasPressed: boolean;

  ngOnInit() {

    this.buttonHasPressed =  false;

  }

  pressedButton(){

    this.buttonHasPressed =  true;
  }

}