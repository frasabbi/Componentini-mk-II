import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen:boolean=false;
  text:string;
  title = 'ModalWindow';
  onOpen(){
    this.isOpen=(!this.isOpen)
  }
  onText(text:string){
    this.text=text;
  }


}
