import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  cityValue: any;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getCity().subscribe((data)=>{
      console.log(data);
      this.cityValue = data;
    });
  }

}
