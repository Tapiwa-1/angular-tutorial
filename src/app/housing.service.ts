import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/locations';

  // getAllHousingLocations(): Housinglocation[] {
  //   return this.housingLocationList;
  // }
  
  async getAllHousingLocations(): Promise <Housinglocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? []; //return data in json format else return an empty array
  }
  // getHousingLocationById(id: number): Housinglocation | undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined>{
    const data = await fetch (`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  
}
