import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoSService } from 'src/app/service/proyecto-s.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(private proyectoS: ProyectoSService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.lista().subscribe(data => { this.proyecto = data; })
  }

  delete(id?: number) {
    var resultado = confirm('¿Estás seguro de borrar el proyecto?');
    if (resultado === true) {
      if (id != undefined) {
        this.proyectoS.delete(id).subscribe(data => {
          alert("Proyecto eliminado")
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        })
      }
    } else {
      alert('No se eliminara el proyecto');
    }
  }
}
