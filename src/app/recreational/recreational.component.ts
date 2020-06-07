import { Component, OnInit } from '@angular/core';
import { SportsData } from './sportsData';

@Component({
  selector: 'app-recreational',
  templateUrl: './recreational.component.html',
  styleUrls: ['./recreational.component.css']
})
export class RecreationalComponent implements OnInit {
  
  public quotes: any = [];
  public quote: any = ["Aerobics","Badminton","Calisthenics","Cycling","Dancing","Fitness","Golf","Martial Arts","Snooker","Swimming","Ten Pin Bowling","Tennis"];
  searchText;
  searchPost;

  collection = { count: this.quotes.length, data:[] };
  

  config= {
    itemsPerPage: 9,
    currentPage: 1,
    totalItems: this.collection.count
  };

  
  constructor() { }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    
    this.getData();
    this.collection.data=this.quotes;
    
  }

  getData() {
    this.searchText="";
    this.searchPost="";
    this.quotes = SportsData;
  }

  onKey(val){
    //alert(val);
    if(val.indexOf(" ")!=-1){
        alert("not input space")
        this.reset();
    }
    if(isNaN(val.trim())){
         alert("please input number")
        this.reset();
    }
  }

  reset(){
    this.searchText = "";
    this.searchPost = "";
  }

}

