import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getCity(): Observable<Data[]>{
    return this.httpClient.get<Data[]>('https://api.waqi.info/feed/here/?token=568e92e9746cdbf8c8ba03e55b2569d0a2c3a254');
  }
}
