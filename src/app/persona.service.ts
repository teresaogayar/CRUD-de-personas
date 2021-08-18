import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona";

@Injectable({
    providedIn: 'root'
})
export class PersonasService{
    constructor( private httpClient: HttpClient){}
   
    cargarUsuarios(){
        const url = 'http://localhost:3000/persons'; //url de la bd.json
        return this.httpClient.get<Persona[]>(url);
    }
    
}