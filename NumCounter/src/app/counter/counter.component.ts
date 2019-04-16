import { Component, OnInit } from '@angular/core';
import {NgModel, Validators, FormControl} from '@angular/forms';
import { isString } from 'util';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter:number=0;
  max:number=5;
  valid:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  increaseCounter(model:NgModel){
    this.counter++;
    this.validation(model);

  }
  decreaseCounter(model:NgModel){
    this.counter--;
    this.validation(model)
  }
  setCounter(model: NgModel){
    console.log(model);
    this.counter=70;
    if(this.counter>5){
      alert("non si può usare questa funizione in questo contesto");
      this.counter=0;
    }
  }
  validation(model:NgModel){
    if(model.value<0||model.value>5){
      this.valid=false;
    }
    else{
      this.valid=true;
    }
    this.textControl(this.counter);
  }

  textControl(counter:number){
    if(counter<0){
      this.counter=0;
    }else if (counter>5){
      this.counter=5;
    }
    
  }
}
