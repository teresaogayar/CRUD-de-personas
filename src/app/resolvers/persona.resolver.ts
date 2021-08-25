import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, delay } from 'rxjs/operators'
import { PersonasService } from "../persona.service";


@Injectable({
    providedIn: 'root'
})

export class PersonaResolver implements Resolve<Observable<any>>{

    constructor(private personaService: PersonasService){

    }

    resolve(route: ActivatedRouteSnapshot){
        let idp = Number(route.paramMap.get('id'));
        return this.personaService.cargarUsuario(idp).pipe(
            catchError(error => {
                alert('Ha fallado algo')

                console.log(error)
                //Con el of vacío se le indica que no vaya a la ruta
                return of() 
            })
        )
    }
}