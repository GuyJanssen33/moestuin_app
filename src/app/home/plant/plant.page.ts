import { Component, OnInit } from '@angular/core';
import {PlantService} from "../../services/plant.service";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {

  Id!: number;
  naam!: string;
  zaaitijd!: string  ;
  zaaitijdBuiten!: string ;
  oogsttijd!: string ;
  zaaienTotKiem!: string ;
  zaaienTotOogst!: string ;
  plantafstand!: string ;
  categorie!: string ;
  details: string = "";


  constructor( public navController: NavController, public plantService: PlantService,
               public activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.setData();
  }

  setData(): void {
    const Id = this.activatedRoute.snapshot.paramMap.get('Id');
    if (Id === null) {
      return;
    }
    /*this.id = Number(id);*/
    const plant = this.plantService.getPlantById(Number(Id));
  }

  handleCreateAndUpdate(): void {
    if (this.Id === undefined) {
      this.createPlant();
    } else {
      this.updatePlant();
    }
    this.navController.back();
  }

  private createPlant(): void {
    this.plantService.newPlant(this.Id, this.naam, this.zaaitijd, this.zaaitijdBuiten,
      this.oogsttijd, this. zaaienTotKiem, this.zaaienTotOogst, this.plantafstand,
      this.categorie, this.details);
  }

  private updatePlant(): void {
    this.plantService.updatePlant({
      Id: this.Id,
      naam: this.naam,
      zaaitijd: this.zaaitijd,
      zaaitijdBuiten: this.zaaitijdBuiten,
      oogsttijd: this.oogsttijd,
      zaaienTotKiem: this.zaaienTotKiem,
      zaaienTotOogst: this.zaaienTotOogst,
      plantafstand: this.plantafstand,
      categorie: this.categorie,
      details: this.details,
    });
  }


}





