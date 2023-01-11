import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Plant} from "../Datatypes/Plant";
import {MoestuinApiResult} from "../Datatypes/moestuinApiResult";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*readonly #apiKey = environment.theOneApiKey;*/
  readonly #baseURL = 'api-production-c657.up.railway.app/Moestuin';

  constructor(private httpClient: HttpClient) {
  }

  getPlant(): Observable<Plant[]> {
  return this.httpClient.get<Plant[]>(`${this.#baseURL}`);
}
}





