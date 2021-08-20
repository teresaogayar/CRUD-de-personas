import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona";

@Injectable({
    providedIn: 'root'
})
export class PersonasService{
    constructor( private httpClient: HttpClient){}

    private url = 'http://localhost:3000/persons'; //url de la bd.json
   
    //Obtener lista de usuarios
    cargarUsuarios(){
        return this.httpClient.get<Persona[]>(this.url);
    }
    
    //Crear usuario
    addUser(persona: Persona){
        console.log(persona)
        return this.httpClient.post<Persona>(this.url, persona);
    }

    //Editar usuario
    updateUser(persona: Persona, persona2: Persona){
        return this.httpClient.put<Persona>(this.url + '/' + persona.id, persona);
    }

    //Eliminar usuario
    deleteUser(id: number){
        return this.httpClient.delete<any>(this.url + '/' + id)
    }
}