import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

    //Obtener un usuario
    cargarUsuario(id: number): Observable<Persona>{
        return this.httpClient.get<Persona>(this.url + '/' + id);
    }
    
    //Crear usuario
    addUser(persona: Persona): Observable<Persona>{
        console.log(persona)
        return this.httpClient.post<Persona>(this.url, persona);
    }

    //Editar usuario
    updateUser(persona: Persona ): Observable<Persona>{
        return this.httpClient.put<Persona>(this.url + '/' + persona.id, persona);
    }

    //Eliminar usuario
    deleteUser(id: number): Observable<Persona>{
        return this.httpClient.delete<Persona>(this.url + '/' + id)
    }
}