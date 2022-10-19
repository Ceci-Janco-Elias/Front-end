import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills } from '../modelos/softSkills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  // softURL = 'http://localhost:8080/softskills/';
  softURL = 'https://backcje.herokuapp.com/softskills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SoftSkills[]> {
    return this.httpClient.get<SoftSkills[]>(this.softURL + 'lista');
  }

  public detail(id: number): Observable<SoftSkills> {
    return this.httpClient.get<SoftSkills>(this.softURL + `detail/${id}`)
  }

  public save(softSkills: SoftSkills): Observable<any> {
    return this.httpClient.post<any>(this.softURL + 'create', softSkills);
  }

  public update(id: number, softSkills: SoftSkills): Observable<any> {
    return this.httpClient.put<any>(this.softURL + `update/${id}`, softSkills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.softURL + `delete/${id}`);
  }
}
