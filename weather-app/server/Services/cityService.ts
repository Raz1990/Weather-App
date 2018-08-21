import { City } from './../Classes/City';
import { Observable, of } from 'rxjs';

const cities: City[] =  [
    { id: 1, name: 'Hadera',   show: true, weatherId: 294946 },
    { id: 2, name: 'Tel Aviv', show: true, weatherId: 293397 },
    { id: 3, name: 'Holon',    show: true, weatherId: 294751 }];


export function getAllCities(): Observable<City[]> {
    return of(this.cities);
}
