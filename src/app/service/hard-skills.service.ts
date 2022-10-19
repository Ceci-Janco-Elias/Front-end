import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkills } from '../modelos/hardSkills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {

  // hardURL = 'http://localhost:8080/hardskills/';
  hardURL = 'https://backcje.herokuapp.com/hardskills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HardSkills[]> {
    return this.httpClient.get<HardSkills[]>(this.hardURL + 'lista');
  }

  public detail(id: number): Observable<HardSkills> {
    return this.httpClient.get<HardSkills>(this.hardURL + `detail/${id}`)
  }

  public save(hardSkills: HardSkills): Observable<any> {
    return this.httpClient.post<any>(this.hardURL + 'create', hardSkills);
  }

  public update(id: number, hardSkills: HardSkills): Observable<any> {
    return this.httpClient.put<any>(this.hardURL + `update/${id}`, hardSkills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.hardURL + `delete/${id}`);
  }
}
