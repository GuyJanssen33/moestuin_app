export interface Plant {
  Id:number;
  naam: string;
  zaaitijd: string;
  zaaitijdBuiten: string;
  oogsttijd: string;
  zaaienTotKiem: string;
  zaaienTotOogst: string;
  plantafstand: string;
  categorie: string;
  details: string;
}

export interface PlantList {
  Plant: Plant[];
}

/*export class PlantC {
  id:number
  naam: string;
  zaaitijd: string;
  zaaitijdBuiten: string;
  oogsttijd: string;
  zaaienTotKiem: string;
  zaaienTotOogst: string;
  plantafstand: string;
  categorie: string;
  details: string;

  constructor(obj: Plant) {
    object.assign(this.obj);
  }
}*/
