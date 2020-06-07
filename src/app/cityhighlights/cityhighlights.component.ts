import { Component, OnInit } from '@angular/core';
import { Music } from './music.data';
import { LatLngLiteral, LatLng } from '@agm/core';

@Component({
  selector: 'app-cityhighlights',
  templateUrl: './cityhighlights.component.html',
  styleUrls: ['./cityhighlights.component.css']
})
export class CityhighlightsComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number = 15;
  Y: number;
  X: number;

  public quotes: any = [];
  public quote: any = ["Amusement", "Bar", "Cafes and Restaurants","Church","Library","Museum","Performance space","Theatre","Venue"];
  searchText;
  _mapsWrapper: any;
  centerChange: any;
  _observableSubscriptions: any;
  usePanning: any;
  constructor() { }
  ngOnInit() {
    this.getData();
    
    this.setCurrentLocation();

    this.reset();
  }


  getData() {
    this.quotes = Music;
  }

  reset(){
      this.searchText = "";
  }

  previous;

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }
 



  private setCurrentLocation() {


    if ('geolocation' in navigator) {


      navigator.geolocation.getCurrentPosition((position) => {


        this.latitude = position.coords.latitude;


        this.longitude = position.coords.longitude;


        this.zoom = 15;


      });


    }
    this.latitude = -37.813;
    this.longitude =144.963;

  }

}
