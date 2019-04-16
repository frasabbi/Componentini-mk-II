import { Component, ViewChild, OnInit } from '@angular/core';
import { ExpansionComponent } from "./expansion/expansion.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  view: boolean;

  @ViewChild('expansion') expansionPanel: ExpansionComponent
   ngOnInit(){
    console.log(this.expansionPanel);
    this.expansionPanel.onPanelView.subscribe((value) =>{
      console.log('sottoscritto all\'output di expansion', value );
    });
  }
  onPanelView(isOpen: boolean) {
    this.view = isOpen;
  }
}