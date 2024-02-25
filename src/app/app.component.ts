import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  weatherService  from './Services/weather-service.service';
import { Weather } from './interface/weather';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, RouterOutlet, FormsModule, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit 
{

  title = 'guajiritos-weather';
  weatherInterface!: Weather;
  show: boolean = false;

  latitud: string ='';
  longitud: string = '';

  city_name: string = '';
  country_code: string = '';
  state_code: string = '';
  city_id: string = '';
  zip_code: string = '';

constructor(private weatherService: weatherService)
{}
  ngOnInit(): void 
  { }


onCoordSubmit() 
{
  this.getWeatherByCoord(this.latitud, this.longitud);  
}

onLocationByCitySubmit() 
{
    if((this.state_code == '') && (this.country_code == ''))
    {
      this.getWeatherByCity(this.city_name);
    }
    else if((this.state_code == '') && (this.country_code !== ''))
    {
      this.getWeatherByCityCountry(this.city_name, this.country_code);
    }
    else if ((this.state_code !== '') && (this.country_code !== ''))
    {
      this.getWeatherByCityCountryState(this.city_name, this.country_code, this.state_code);
    }
}

onCityIdSubmit() 
{
  this.getWeatherByCityId(this.city_id);
}

onZipSubmit() 
{
  this.getWeatherByZip(this.zip_code, this.country_code);  
}

public getWeatherByCoord(lat: string, lon: string): Weather
{
  this.weatherService.getWeatherByCoord(lat, lon).subscribe({
    next: (response: any) => {
      this.weatherInterface = response;
      this.convertKelvinToCelsius(this.weatherInterface);
      this.show = true;
    },
    error: (error: any) =>{

      Swal.fire({
        title: "Coordinates not found",
        text: "",
        icon: "error"
      }).then((result)=>{
      window.location.reload();
      });      
    },
  });
  return this.weatherInterface;
}

public getWeatherByCity(city: string): Weather
{
  this.weatherService.getWeatherByCity(city).subscribe({
    next: (response: any) =>{
      this.weatherInterface = response;
      this.convertKelvinToCelsius(this.weatherInterface);
      this.show = true;     
    },
    error: (error: any)=>{
      Swal.fire({
        title: "City not found",
        text: "",
        icon: "error"
      }).then((result)=>{
      window.location.reload();
      });
    },
  });
  return this.weatherInterface
}

public getWeatherByCityCountry(city: string, country: string): Weather
{
  this.weatherService.getWeatherByCityCountry(city, country).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    this.convertKelvinToCelsius(this.weatherInterface);
    this.show = true;
  },
  error: (error: any)=> {
    Swal.fire({
      title: "City not found",
      text: "",
      icon: "error"
    }).then((result)=>{
    window.location.reload();
    });
  },
});
return this.weatherInterface;
}

public getWeatherByCityCountryState(city: string, country: string, state: string): Weather
{
  this.weatherService.getWeatherByCityCountryState(city, country, state).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    this.convertKelvinToCelsius(this.weatherInterface);
    this.show = true;
  },
  error: (error: any)=> {
    Swal.fire({
      title: "City not found",
      text: "",
      icon: "error"
    }).then((result)=>{
    window.location.reload();
    });
  },
});
return this.weatherInterface;
}

public getWeatherByCityId(id: string): Weather
{
  this.weatherService.getWeatherByCityId(id).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    this.convertKelvinToCelsius(this.weatherInterface);
    this.show = true;
  },
  error: (error: any)=> {
    Swal.fire({
      title: "City not found",
      text: "",
      icon: "error"
    }).then((result)=>{
    window.location.reload();
    });
  },
});
return this.weatherInterface;
}

public getWeatherByZip(zip: string, country: string): Weather
{
  this.weatherService.getWeatherByZip(zip, country).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    this.convertKelvinToCelsius(this.weatherInterface);
    this.show = true;
  },
  error: (error: any)=> {
    Swal.fire({
      title: "Zip not found",
      text: "",
      icon: "error"
    }).then((result)=>{
    window.location.reload();
    });
  },
});
return this.weatherInterface;
}

public convertKelvinToCelsius(weather: Weather): void 
{
  weather.main.temp = this.weatherService.convertKelvinToCelsius(weather.main.temp);
}
}
