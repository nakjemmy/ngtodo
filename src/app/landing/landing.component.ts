import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('flyIn', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('0.6s ease-in', keyframes([
            style({opacity:  0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity:  0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity:  1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('0.6s ease-in', keyframes([
            style({opacity:  1, transform: 'translateY(0)', offset: 0}),
            style({opacity:  0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity:  0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ]),

    trigger('fadeInAnimation', [
      
             // route 'enter' transition
             transition(':enter', [
      
                 // css styles at start of transition
                 style({ opacity: 0 }),
      
                 // animation and styles at end of transition
                 animate('1s', style({ opacity: 1 }))
             ]),
         ])
  ]
})
export class LandingComponent implements OnInit {
  appName: string = "Todo List App";
  todoItem: string = "Add New Item";
  btnName: string = "Add to List"
  listItems= ["This is a hardcoded Item", "Add your own items"];
  listItemCount: number;
  constructor() { }

  ngOnInit() {
    this.listItemCount = this.listItems.length;
  }

  addItem(){
    this.listItems.push(this.todoItem);
    this.todoItem = "";
    this.listItemCount = this.listItems.length;
  }

  removeItem(i){
    this.listItems.splice(i, 1);
    this.listItemCount = this.listItems.length;
  }
}
