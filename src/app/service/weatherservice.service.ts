import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) { }

    //http://api.openweathermap.org/data/2.5/forecast?q=London&appid=a8cd739b976f5b4c2021603c21c594a5

    weatherKey:string = 'a8cd739b976f5b4c2021603c21c594a5';
    weatherHost:string = 'https://api.openweathermap.org/data/2.5';
  

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }


    getWeatherByCountryName(countreName:string){
     return this.http.get(`${this.weatherHost}/forecast?q=${countreName}&appid=${this.weatherKey}`)
    }

    getCurrentWeather(){
      
    }

}
