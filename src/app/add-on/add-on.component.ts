import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent implements OnInit {

  @Output()
  addOn=new EventEmitter();
  @Input()
  addOnValue:number;
  constructor() { }
  addOns=[10,20,30,40,50];

  @Input()
  isSelected:boolean=false;

  @Input()
  index:number=0;
  ngOnInit() {
  }

  onClick(){

    this.addOn.emit([this.addOnValue,this.index])
  }

}
