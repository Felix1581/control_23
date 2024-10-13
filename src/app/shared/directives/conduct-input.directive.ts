import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[productInput]'
})
export class ConductInputDirective implements OnInit {

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.el.nativeElement.setAttribute('disabled', 'disabled');
  }


}



