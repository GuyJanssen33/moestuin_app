import { Injectable } from '@angular/core';
import {Plant} from "../../Datatypes/Plant";

@Injectable({
  providedIn: 'root', useClass: PlantService
})
export class PlantService {

  #plantList: Plant[] = [];
  #Id = 0;

  constructor() {
  }

  getAllPlants(): Plant[] {
    return this.#plantList;
  }

  deleteTask(Id: number): void {
    this.#plantList = this.#plantList.filter(p => p.Id !== Id);
  }


  newPlant(
    Id: number,
    naam: string,
    zaaitijd: string,
    zaaitijdBuiten: string,
    oogsttijd: string,
    zaaienTotKiem: string,
    zaaienTotOogst: string,
    plantafstand: string,
    categorie: string,
    details: string,
  ): void {
    this.#plantList.push({

      Id,
      naam,
      zaaitijd,
      zaaitijdBuiten,
      oogsttijd,
      zaaienTotKiem,
      zaaienTotOogst,
      plantafstand,
      categorie,
      details


    });
    /*this.id++;*/
  }

  updatePlant(updatedPlant: Plant): void {
    const plant = this.#plantList.find(p => p.Id === updatedPlant.Id);
    if (plant === undefined) {
      console.error('Trying to update a nonexistent task.');
      return;
    }

    Object.assign(plant, updatedPlant);
  }

  getPlantById(id: number): Plant | undefined {
    return this.#plantList.find(p => p.Id === id);
  }

}
