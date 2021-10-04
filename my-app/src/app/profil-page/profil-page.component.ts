import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  cityValue: any = [ ];

  popValue: any = [ ];

  setColor: boolean = true;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getCity().subscribe((data)=>{
      this.cityValue.push(data);
      console.log(this.cityValue);

      //let popValue = this.cityValue.map((t: { iaqi: { o3: { v: any; }; }; }) => t.iaqi.o3.v)
      //console.log(popValue);

      //this.popValue = JSON.parse(this.cityValue)
      //console.log(this.popValue)
    });
  }

}
