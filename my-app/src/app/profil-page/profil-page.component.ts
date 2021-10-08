import { formatDate } from '@angular/common';
import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { ApiService } from '../api.service';

//------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  cityValue: any = [ ]; cityValueDialog: any = [ ]; setColor: any;
  setNameQuality: any; dominent: any; dominentValue: any;
  nameCity: any; localTime: any; username: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(SmogDialog);}

  ngOnInit() {

    const auth = getAuth();
    const db = getDatabase();

    console.log(auth);
    console.log(db);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        
        updateProfile(auth.currentUser, {
          displayName: "Adam"
        }).then(() => {}).catch((error) => {});

        const username = user.displayName;
        this.username = username;
        console.log(username);
      } 
    });

    //==============================================
      this.apiService.getCity().subscribe((data)=>{
      this.cityValue.push(data);
      console.log(this.cityValue[0].data);

      let element: HTMLElement = document.getElementsByTagName('circle-progress')[0] as HTMLElement;
      element.click();

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
      else this.setColor = "error"});}}

//------------------------------------------------------------------------------------------------

@Component({
  selector: 'smog-dialog',
  templateUrl: 'smog-dialog.html',
  styleUrls: ['./profil-page.component.css']
})
export class SmogDialog {
  cityValue: any = [ ]; cityValueDialog: any = [ ]; encapsulation: ViewEncapsulation.None;
  setColor: any; setNameQuality: any; dominent: any;
  dominentValue: any; nameCity: any; localTime: any;
  pm10: any; o3: any; no2: any; so2: any; co: any;
  setColorPm10: any; setColorO3: any; setColorNo2: any;
  setColorSo2: any; setColorCo: any;
  sourceUrl: any; sourceName: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
      this.apiService.getCity().subscribe((data)=>{
      this.cityValue.push(data);
      console.log(this.cityValue[0].data);

      this.pm10 = this.cityValue[0].data.iaqi.pm10.v;
      this.o3 = this.cityValue[0].data.iaqi.o3.v;
      this.no2 = this.cityValue[0].data.iaqi.no2.v;
      this.so2 = this.cityValue[0].data.iaqi.so2.v;
      this.co = this.cityValue[0].data.iaqi.co.v;

      this.sourceUrl = this.cityValue[0].data.attributions[1].url;
      this.sourceName = this.cityValue[0].data.attributions[1].name;

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

      if (this.pm10 <= 50) {this.setColorPm10 = "green-api-color";}
      else if (this.pm10 >= 51 && this.pm10 <=100) {this.setColorPm10 = "medium-api-color"}
      else if (this.pm10 >=101 && this.pm10 <=150) {this.setColorPm10 = "more-medium-api-color"}
      else if (this.pm10 >= 151 && this.pm10 <=200) {this.setColorPm10 = "hard-api-color"}
      else if (this.pm10 >=201 && this.pm10 <300) {this.setColorPm10 = "hard-hard-api-color"}
      else if (this.pm10 >= 300) {this.setColorPm10 = "dead-api-color"}
      else this.setColorPm10 = "error-color"

      if (this.o3 <= 50) {this.setColorO3 = "green-api-color";}
      else if (this.o3 >= 51 && this.o3 <=100) {this.setColorO3 = "medium-api-color"}
      else if (this.o3 >=101 && this.o3 <=150) {this.setColorO3 = "more-medium-api-color"}
      else if (this.o3 >= 151 && this.o3 <=200) {this.setColorO3 = "hard-api-color"}
      else if (this.o3 >=201 && this.o3 <300) {this.setColorO3 = "hard-hard-api-color"}
      else if (this.o3 >= 300) {this.setColorO3 = "dead-api-color"}
      else this.setColorO3 = "error-color"

      if (this.no2 <= 50) {this.setColorNo2 = "green-api-color";}
      else if (this.no2 >= 51 && this.no2 <=100) {this.setColorNo2 = "medium-api-color"}
      else if (this.no2 >=101 && this.no2 <=150) {this.setColorNo2 = "more-medium-api-color"}
      else if (this.no2 >= 151 && this.no2 <=200) {this.setColorNo2 = "hard-api-color"}
      else if (this.no2 >=201 && this.no2 <300) {this.setColorNo2 = "hard-hard-api-color"}
      else if (this.no2 >= 300) {this.setColorNo2 = "dead-api-color"}
      else this.setColorNo2 = "error-color"

      if (this.so2 <= 50) {this.setColorSo2 = "green-api-color";}
      else if (this.so2 >= 51 && this.so2 <=100) {this.setColorSo2 = "medium-api-color"}
      else if (this.so2 >=101 && this.so2 <=150) {this.setColorSo2 = "more-medium-api-color"}
      else if (this.so2 >= 151 && this.so2 <=200) {this.setColorSo2 = "hard-api-color"}
      else if (this.so2 >=201 && this.so2 <300) {this.setColorSo2 = "hard-hard-api-color"}
      else if (this.so2 >= 300) {this.setColorSo2 = "dead-api-color"}
      else this.setColorSo2 = "error-color"

      if (this.co <= 50) {this.setColorCo = "green-api-color";}
      else if (this.co >= 51 && this.co <=100) {this.setColorCo = "medium-api-color"}
      else if (this.co >=101 && this.co <=150) {this.setColorCo = "more-medium-api-color"}
      else if (this.co >= 151 && this.co <=200) {this.setColorCo = "hard-api-color"}
      else if (this.co >=201 && this.co <300) {this.setColorCo = "hard-hard-api-color"}
      else if (this.co >= 300) {this.setColorCo = "dead-api-color"}
      else this.setColorCo = "error-color"
    
    });}}