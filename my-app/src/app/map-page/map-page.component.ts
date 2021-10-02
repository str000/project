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

        const el = document.createElement('div');
        el.className = 'marker';

        this.marker1 = new Mapboxgl.Marker(el)
          .setLngLat([position.coords.longitude, position.coords.latitude])
          .addTo(this.mapa);
      });
      navigator.geolocation.getCurrentPosition(position => {
        this.marker1.setLngLat([position.coords.longitude, position.coords.latitude]);
      })
    } else {
      //nie zezwolono na lokalizowanie
    }

 

    

    

      
  }


}
