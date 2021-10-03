import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getCity(){return this.httpClient.get('https://api.waqi.info/feed/here/?token=568e92e9746cdbf8c8ba03e55b2569d0a2c3a254');}
}
