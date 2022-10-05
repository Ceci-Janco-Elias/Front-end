import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaSService } from 'src/app/service/experiencia-s.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaS: ExperienciaSService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaS.lista().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaS.delete(id).subscribe(data => {
        alert("Experiencia eliminada")
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo borrar la experiencia");
      })
    }
  }

}
