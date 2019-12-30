import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  coverages=[1000,2000,3000,4000];
  selectedCoverageFlags=[true,false,false,false];
  addOns=[10,20,30,40];
  selectedAddOnFlags=[false,false,false,false];


  selectedPremium:number=1000;
  selectedAddOn:number=0  ;
totalPremium:number=1000;

onCoverage(value:any[]){
this.selectedPremium=value[0];
  console.log(value);
  this.selectedPremium=value[0];
  this.totalPremium=0;
  this.totalPremium+=value[0]+this.selectedAddOn;

  for(let i=0;i<this.selectedCoverageFlags.length;i++){
    if(value[1]!=i){
      this.selectedCoverageFlags[i]=false;
    }
    this.selectedCoverageFlags[value[1]]=true;
  }

}
onAddOnselection(value:any[]){
  // console.log(newAddOn);
  this.selectedAddOn=value[0];
  this.totalPremium+=value[0];
  this.totalPremium=0;
  this.totalPremium+=value[0]+this.selectedPremium;
  for(let i=0;i<this.selectedAddOnFlags.length;i++){
    if(value[1]!=i){
      this.selectedAddOnFlags[i]=false;
    }
    this.selectedAddOnFlags[value[1]]=true;
  }
} 

ngOnInit(){

  this.totalPremium=this.coverages[0];
}
}
