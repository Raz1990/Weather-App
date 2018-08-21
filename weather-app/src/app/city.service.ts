import { Injectable } from '@angular/core';

import { City } from './Classes/City';
import { Observable, of } from 'rxjs';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: City[] =  [
    { id: 1, name: 'Hadera',   show: true, weatherId: 294946 },
    { id: 2, name: 'Tel Aviv', show: true, weatherId: 293397 },
    { id: 3, name: 'Holon',    show: true, weatherId: 294751 }];

  constructor(private weatherService: WeatherService) { }

  getCities(): Observable<City[]> {
    return of(this.cities);
  }

  updateCityShow(id: number) {
    const chosenCity = this.cities[id] ;
    chosenCity.show = !chosenCity.show;
  }

  updateCityTemp() {
    for (const city of this.cities) {
      this.weatherService.getWeatherData(city.weatherId)
        .subscribe(data => {
          const jsonData = data.json();
           city.temperature = jsonData.main.temp;
           city.weather = jsonData.weather[0].main;
        });
    }
  }
}
