import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class WeatherServiceService 
{

  constructor(private http: HttpClient) { }

    // coordinates
  public getWeatherByCoord(lat: string, lon: string)
  {
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid='+ environment.apiKey);
  }
        // city
  public getWeatherByCity(city: string)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + environment.apiKey);
  }
    // city - country 
  public getWeatherByCityCountry(city: string, country: string)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + environment.apiKey);
  }
    // city - country - state 
  public getWeatherByCityCountryState(city: string, country: string, state: string)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + ',' + country + '&appid=' + environment.apiKey);
  }
      // city id 
  public getWeatherByCityId(id: string)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + environment.apiKey);
  }
    // zip - country
  public getWeatherByZip(zip: string, country: string)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',' + country + '&appid=' + environment.apiKey);
  }

}
