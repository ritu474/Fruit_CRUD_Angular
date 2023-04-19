import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FruitsInterface } from '../fruits/fruits-interface';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  private url= "http://localhost:3000/fruits";
  constructor(private F : HttpClient) { }

  getFruits()
  {
    return this.F.get<FruitsInterface[]>(this.url); //get - to fetch data from the api
  }
  create(payload: FruitsInterface) {
  return this.F.post<FruitsInterface>(this.url, payload);
}
getById(id: number) {
  return this.F.get<FruitsInterface>(`http://localhost:3000/fruits/${id}`);
 }
  
 update(payload:FruitsInterface){
  return this.F.put(`http://localhost:3000/fruits/${payload.id}`,payload);
 }
 delete(id:number){
  return this.F.delete<FruitsInterface>(`http://localhost:3000/fruits/${id}`);
}
}
