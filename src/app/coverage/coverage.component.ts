import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {

  coverages=[1000,2000,3000,4000];
  @Input()
  premium:number;
  
  @Input()
  index:number=0;

  @Input()
  isChecked:boolean=true;

  @Output() coverage=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCoverageChanges(){
    console.log("before event emits")
      this.coverage.emit([this.premium,this.index]);
    
    }
}

