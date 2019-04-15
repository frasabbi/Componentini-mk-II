import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonText } from "../button-text";

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
})
export class AlertWindowComponent implements OnInit {
@Input() isView:boolean;
@Output()isViewChange:EventEmitter<any>=new EventEmitter<any>();
@Output()onText: EventEmitter<any>=new EventEmitter<any>();
buttonText=ButtonText;
  constructor() { }

  ngOnInit() {
  }
  view(){
    // this.isViewChange.emit(this.isView=(!this.isView));
    this.isViewChange.emit(false);
    console.log("view");
  }
  onClick(text:string){
    this.onText.emit(text);
  }
}
