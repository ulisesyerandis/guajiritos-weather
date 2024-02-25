import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class WeatherServiceService 
{

  constructor(private http: HttpClient) { }

  public getWeather()
  {
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='+environment.apiKey);
  }

}
