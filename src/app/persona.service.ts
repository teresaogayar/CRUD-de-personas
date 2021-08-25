import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Persona } from "./persona";

@Injectable({
    providedIn: 'root'
})
export class PersonasService{
    constructor( private httpClient: HttpClient){}

    headers(){
        return{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Autorization': 'Bearer'
        }
    }

    private url :  string = environment.apiUrl;
   
    //Obtener lista de usuarios
    cargarUsuarios(){
        return this.httpClient.get<Persona[]>(this.url);
    }

    //Obtener un usuario
    cargarUsuario(id: number): Observable<Persona>{
        //Si modificamos la url  de cargarUsuario salta error
        return this.httpClient.get<Persona>(this.url + '/8' + id, {
            headers: this.headers() 
        });
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