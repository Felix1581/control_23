import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [NgbAccordionConfig],
})


export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<string>;
  visibility: boolean = false;

  constructor(config: NgbAccordionConfig) {
    this.observable = new Observable((observer) => {
      const timeout = setTimeout(() => {
        observer.next('true');
      }, 10000);
      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    })

    config.closeOthers = true;
    config.type = 'info';
  }

  private  subscription: Subscription | null = null

  ngOnInit(): void {
    this.subscription = this.observable.subscribe((param: string) => {
      if (param === 'true') {
        this.visibility = true;
      }

    });

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}

// declare var $: any;
//
// $(function () {
//   $("#accordion").accordion({
//     collapsible: true
//   });
// });


