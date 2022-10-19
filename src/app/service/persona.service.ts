import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // personaURL = 'http://localhost:8080/persona/';
  personaURL = 'https://backcje.herokuapp.com/persona/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.personaURL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.personaURL + `detail/${id}`)
  }

  public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.personaURL + 'create', Persona);
  }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.personaURL + `update/${id}`, Persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.personaURL+ 'traer/perfil');
  }
}