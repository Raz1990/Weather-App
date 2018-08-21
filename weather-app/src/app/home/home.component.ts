import { Component, OnInit } from '@angular/core';

import { City } from './../Classes/City';
import { CityService } from './../city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cityService: CityService) { }

  cities: City[];

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    const filterCities = [];
    this.cityService.getCities()
    .subscribe((cities) => {
      for (const city of cities) {
        if (city.show) {
          filterCities.push(city);
        }
      }
      });
      this.cities = filterCities;
      this.getData();
    }

  getData(): void {
      this.cityService.updateCityTemp();
  }

}
