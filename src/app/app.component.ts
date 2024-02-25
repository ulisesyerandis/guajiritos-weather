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

onSubmit() 
{
  this.getWeatherByCoord(this.latitud, this.longitud);  
}

public getWeatherByCoord(lat: number, lon: number): Weather
{
  this.weatherService.getWeatherByCoord(lat, lon).subscribe({
    next: (response: any) => {
      this.weatherInterface = response;
      console.log('coord by latitud and longitud = '+this.weatherInterface)
    },
    error: (error: any) =>{
      console.log('error showing data weather ');
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