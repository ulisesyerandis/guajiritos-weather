import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import  WeatherServiceService  from './Services/weather-service.service';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WeatherDataComponent } from './weather-data/weather-data.component';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, FormsModule),
    WeatherServiceService, WeatherDataComponent,
    provideAnimationsAsync(),
  ]
};
