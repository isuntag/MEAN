import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnDestroy {
    weather:Object = {};
    subscription: any;
    constructor(private _weatherService: WeatherService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.getWeather();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getWeather() {
      this._route.paramMap
        .switchMap(params => {
            return this._weatherService.getWeather(params.get('city'))
        })
        .subscribe(weather => this.weather = weather)
    }
}
