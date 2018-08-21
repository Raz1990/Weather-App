import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '72ad0bb01711b9cf2ef1490b771c562e';

  constructor(private http: Http) { }

  getWeatherData(cityId: number): Observable<any> {
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?id='
    + cityId + '&APPID=' + this.apiKey + '&units=metric';
    const res = this.http.get(weatherUrl);
    return res;
  }
}
