import { Component } from '@angular/core';
import {Plant} from "../../Datatypes/Plant";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  PlantList: Plant[] = []
  #id = 0;


  constructor() {
    for (let i = 0; i < 10; i++) {
      this.PlantList.push({
        id: this.#id++,
        naam: 'Plant ' + this.#id,
        zaaitijd: 'zaaitijd',
        zaaitijdBuiten: 'zaaitijdBuiten',
        oogsttijd: 'oogsttijd',
        zaaienTotKiem: 'zaaienTotKiem',
        zaaienTotOogst: 'zaaienTotOogst',
        plantafstand: 'plantafstand',
        categorie: 'categorie',
        details: 'details',
      })
    }
  }


}

