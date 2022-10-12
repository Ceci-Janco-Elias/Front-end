import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoSService } from 'src/app/service/proyecto-s.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombrePro: string = '';
  descripcionPro: string = '';
  urlPro: string = '';
  imgPro: string = '';

  constructor(private proyectoS: ProyectoSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const soft = new Proyecto(this.nombrePro, this.descripcionPro, this.urlPro, this.imgPro);
    if (this.nombrePro === "") {
      alert("El nombre es necesario")
    } else if (this.descripcionPro === "") {
      alert("Es necesario poner una descripción")
    } else if (this.urlPro === "") {
      alert("Es necesario colocar URL del proyecto")
    } else if (this.imgPro === "") {
      alert("Es necesario colocar una imagen del proyecto")
    }
    else {
      this.proyectoS.save(soft).subscribe(data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló creación del proyecto");
      })
    }
  }
}
