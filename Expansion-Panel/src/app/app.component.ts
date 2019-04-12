import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view:boolean;
  onPanelView(isOpen:boolean){
    this.view=isOpen;
  }
}
