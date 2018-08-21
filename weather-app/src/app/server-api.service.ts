import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerAPIService {

  private baseUrl = 'http://localhost:4000';

  constructor(private http: Http) { }

  getCities(): Observable<any> {
    return this.get('/cities');
  }

  get(url): Observable<any> {
    const res = this.http.get(this.baseUrl + url);
    return res;
  }
}
