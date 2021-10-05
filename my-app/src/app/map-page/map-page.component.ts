import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  mapa: Mapboxgl.Map;
  lat: any;
  lng: any;
  marker1: any;
  acc: any;

  aclx: any;
  acly: any;
  aclz: any;

  speedV: any;
  alpha: any;

  liveActivity: any;

  ngOnInit() {

    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.mapa = new Mapboxgl.Map({
          accessToken: environment.mapboxKey,
          container: 'mapa-mapbox',
          style: 'mapbox://styles/radek03/cku8qabln2n3b17o4v0ahpmc2',
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 15
        });
      });

      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      }, null, {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      });
      
    } else {
      //nie zezwolono na lokalizowanie
    }

    
    //Accelerometer aby sprawdzać czym sie porusza
    /*if(window.DeviceOrientationEvent){
      window.addEventListener("deviceorientation", (e) => {
        this.alpha = Math.abs(e.alpha! - 360);
        this.mapa.rotateTo(this.alpha, {duration: 1})
      }, true);
    }else{
      console.log("DeviceOrientationEvent is not supported");
    }

    if(window.DeviceMotionEvent){
      window.addEventListener("devicemotion", (event) => {
        this.aclx = event.acceleration?.x?.toFixed(2);
        this.acly = event.acceleration?.y?.toFixed(2);
        this.aclz = event.acceleration?.z?.toFixed(2);
      }, false);
    }else{
      console.log("DeviceMotionEvent is not supported");
    }
*/
   
  }



  showTrackingPosition(position: GeolocationPosition) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      var speed = position.coords.speed;
      
      if(!this.marker1) {
        const el = document.createElement('div');
        el.className = 'marker';
        
        this.marker1 = new Mapboxgl.Marker(el)
          .setLngLat([position.coords.longitude, position.coords.latitude])
          .addTo(this.mapa);
        this.mapa.setCenter([long, lat]);
      } else {
        this.marker1.setLngLat([long, lat]);
        this.mapa.setCenter([long, lat]);
      }
      
      if (speed === null || speed === 0) {
        this.speedV = 0;
      } else {
        this.speedV = (speed * 3.6).toFixed(0);
      }

      if (this.speedV > 0 && this.speedV < 7) {
        this.liveActivity = "directions_walk"
      }
      else if (this.speedV >= 7 && this.speedV <=30) {
        this.liveActivity = "directions_run"
      } 
      else if (this.speedV > 30) {
        this.liveActivity = "drive_eta"
      } 
      else {
        this.liveActivity = "accessibility"
      }
  }

}
