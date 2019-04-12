import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent implements OnInit {
  isView:boolean=false;
  @Output() onPanelView:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  panelView(){
    this.isView=(!this.isView);
    this.onPanelView.emit(this.isView);
   }
}
