import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  cityValue: any = [ ];
  setColor: any;
  setNameQuality: any;
  dominent: any;
  dominentValue: any;
  nameCity: any;
  localTime: any;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getCity().subscribe((data)=>{
      this.cityValue.push(data);
      console.log(this.cityValue[0].data);
      

      this.dominent = this.cityValue[0].data.dominentpol;

      var time = new Date();
      this.localTime = formatDate(time, 'HH:MM', 'en-US')

      var location = this.cityValue[0].data.city.name;

      var localCityLocation = location.split(',')

      this.nameCity = localCityLocation[1]

      this.dominentValue = this.cityValue[0].data.iaqi[this.dominent].v;

      if (this.dominentValue <= 50) {
        this.setColor = "green-api";
        this.setNameQuality = "Bardzo Dobra";
      }
      else if (this.dominentValue >= 51 && this.dominentValue <=100) {
        this.setColor = "medium-api"
        this.setNameQuality = "Dobra";
      }
      else if (this.dominentValue >=101 && this.dominentValue <=150){
        this.setColor = "more-medium-api"
        this.setNameQuality = "Średnia";
      }
      else if (this.dominentValue >= 151 && this.dominentValue <=200){
        this.setColor = "hard-api"
        this.setNameQuality = "Niezdrowa";
      }
      else if (this.dominentValue >=201 && this.dominentValue <300) {
        this.setColor = "hard-hard-api"
        this.setNameQuality = "Bardzo niezdrowa";
      }
      else if (this.dominentValue >= 300){
        this.setColor = "dead-api"
        this.setNameQuality = "Zagrożenie dla życia";
      }
      else this.setColor = "error"

    });
  }
}

export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(SmogDialog, dialogConfig);

      dialogConfig.position = {
        top: '0',
        left: '0'
      };
  }
}

@Component({
  selector: 'smog-dialog',
  templateUrl: 'smog-dialog.html',
})
export class SmogDialog {}