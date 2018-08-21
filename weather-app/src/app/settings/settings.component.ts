import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { City } from './../Classes/City';
import { CityService } from './../city.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  cities: City[];

  constructor(
    private location: Location,
    private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
    .subscribe(cities => this.cities = cities);
  }

  goBack(): void {
    this.location.back();
  }

  updateCityShow(id: number) {
    this.cityService.updateCityShow(id - 1);
  }
}
