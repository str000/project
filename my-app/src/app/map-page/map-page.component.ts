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

  ngOnInit() {
    this.mapa = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'mapa-mapbox',
      style: 'mapbox://styles/radek03/cku8qabln2n3b17o4v0ahpmc2',
      center: [19.017979, 50.258462],
      zoom: 16.52
    })
  }

}
