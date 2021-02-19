import { Component } from '@angular/core';

@Component({
  selector: 'test-faq',
  templateUrl: './test-faq.html',
  styleUrls: ['./test-faq.scss']
})

export class TestFaqComponent {

  text: string;
  button_text = 'on';
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }
  change(){
    if (this.button_text == 'on') this.button_text = 'off';
    else this.button_text = 'on';
  }

  constructor() {
    console.log('Hellow TestFaqComponent Component');
    this.text = 'Hello World';
  }
}