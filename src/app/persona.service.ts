import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PersonasService{
    constructor( private httpClient: HttpClient){}
   
    cargarUsuarios(){
        const url = 'http://localhost:3000/persons';
        return this.httpClient.get(url);
    }
    
}