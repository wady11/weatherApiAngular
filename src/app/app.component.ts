import { Component, OnInit } from '@angular/core';
import {WeatherserviceService} from '../../src/app/service/weatherservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  country = 'London';


  constructor(private weatherService:WeatherserviceService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.weatherService.getWeatherByCountryName(this.country).subscribe(
      weather=>{console.log(weather)})
    
  }

}
