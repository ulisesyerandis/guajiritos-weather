import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  weatherService  from './Services/weather-service.service';
import { Weather } from './interface/weather';
import { FormsModule } from '@angular/forms';

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

  latitud: number = 0;
  longitud: number = 0;

  city_name: string = '';
  country_code: string = '';
  state_code: string = '';
  city_id: string = '';
  zip_code: string = '';

constructor(private weatherService: weatherService)
{}
  ngOnInit(): void 
  {
    this.getWeather();
  }

public getWeather(): Weather
{
  this.weatherService.getWeather().subscribe({
    next: (response: any) => {
      this.weatherInterface = response;
      console.log(this.weatherInterface)
    },
    error: (error: any) =>{
      console.log('error ')
    },
  });
  return this.weatherInterface;
}

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

public getWeatherByCoord(lat: number, lon: number): Weather
{
  this.weatherService.getWeatherByCoord(lat, lon).subscribe({
    next: (response: any) => {
      this.weatherInterface = response;
      console.log('coord by latitud and longitud = '+this.weatherInterface.name)
    },
    error: (error: any) =>{
      console.log('error showing data weather ');
    },
  });
  return this.weatherInterface;
}

onZipSubmit() 
{
  this.getWeatherByZip(this.zip_code, this.country_code);  
}

public getWeatherByCity(city: string): Weather
{
  this.weatherService.getWeatherByCity(city).subscribe({
    next: (response: any) =>{
      this.weatherInterface = response;
      console.log('city: ' + this.weatherInterface.name);
    },
    error: (error: any)=>{
      console.log('error showing city');
    },
  });
  return this.weatherInterface
}

public getWeatherByCityCountry(city: string, country: string): Weather
{
  this.weatherService.getWeatherByCityCountry(city, country).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    console.log('city - country: ' + this.weatherInterface.name);
  },
  error: (error: any)=> {
    console.log('error showing sity - country');
  },
});
return this.weatherInterface;
}

public getWeatherByCityCountryState(city: string, country: string, state: string): Weather
{
  this.weatherService.getWeatherByCityCountryState(city, country, state).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    console.log('city - country - state: ' + this.weatherInterface.name);
  },
  error: (error: any)=> {
    console.log('error showing city - country - state');
  },
});
return this.weatherInterface;
}

public getWeatherByCityId(id: string): Weather
{
  this.weatherService.getWeatherByCityId(id).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    console.log('city id: ' + this.weatherInterface.name);
  },
  error: (error: any)=> {
    console.log('error showing city id');
  },
});
return this.weatherInterface;
}

public getWeatherByZip(zip: string, country: string): Weather
{
  this.weatherService.getWeatherByZip(zip, country).subscribe({
  next: (response: any) =>{
    this.weatherInterface = response;
    console.log('zip - country: ' + this.weatherInterface.name);
  },
  error: (error: any)=> {
    console.log('error showing zip - country');
  },
});
return this.weatherInterface;
}


}


// public FillStudentData(): void
// {
//   this.studentListService.getAllStudent().subscribe({
//       next: (response: any) => {
//           this.studentList = response;
//           console.log("Hello world");
//           this.dataSource = this.studentList;
//       },
//       error: (error: any) => {   
//           // console.log(error)
//       },
//   });
//   // --console.log(this.studentList + ' cant');
// }