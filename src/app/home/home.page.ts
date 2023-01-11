import {Component, OnInit} from '@angular/core';
import {Plant} from "../../Datatypes/Plant";
import {ApiService} from "../services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  PlantList= this.ApiService.getPlant();


  constructor(public ApiService: ApiService) {
    this.PlantList.subscribe(plant => console.log(plant));
    console.log(this.PlantList);}


  ngOnInit(): void {
  }

}

