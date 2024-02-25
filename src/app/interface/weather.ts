import { Clouds } from "./clouds";
import { Coord } from "./coord";
import { Main } from "./main";
import { Sys } from "./sys";
import { WeatherElement } from "./weather-element";
import { Wind } from "./wind";

export interface Weather 
{
    coord:      Coord;
    weather:    WeatherElement[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}
