import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import  WeatherServiceService  from './Services/weather-service.service';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    WeatherServiceService,
  ]
};
