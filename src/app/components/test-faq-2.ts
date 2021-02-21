import { Component, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'test-faq-2',
  templateUrl: './test-faq-2.html',
  styleUrls: ['./test-faq-2.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class TestFaqComponent2 {
  @Input() icon = 'arrow';
  @ViewChild("el", {read: ElementRef}) el: ElementRef;

  constructor() { }

  toggleHelper() {
    this.el.nativeElement.classList.toggle("active");
    var panel = this.el.nativeElement.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
  }
}