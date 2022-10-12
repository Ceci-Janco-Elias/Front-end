import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaSService } from 'src/app/service/experiencia-s.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreExp: string = '';
  descripcionExp: string = '';
  fechaExp: string = '';
  imagenExp: string = '';

  constructor(private experienciaS: ExperienciaSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const soft = new Experiencia(this.nombreExp, this.descripcionExp, this.fechaExp, this.imagenExp);
    if (this.nombreExp === "") {
      alert("El nombre es necesario")
    } else if (this.descripcionExp === "") {
      alert("Es necesario poner una descripción")
    } else if (this.fechaExp === "") {
      alert("Es necesario colocar fecha")
    } else if (this.imagenExp === "") {
      alert("Es necesario colocar una imagen para la experiencia laboral")
    }
    else {
      this.experienciaS.save(soft).subscribe(data => {
        alert("Experiencia laboral añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló creación de nueva experiencia laboral");
      })
    }
  }
}
