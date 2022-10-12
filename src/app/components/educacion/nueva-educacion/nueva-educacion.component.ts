import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionSService } from 'src/app/service/educacion-s.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  nombreEdu: string = '';
  descripcionEdu: string = '';
  fechaEdu: string = '';
  imagenEdu: string = '';

  constructor(private educacionS: EducacionSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const soft = new Educacion(this.nombreEdu, this.descripcionEdu, this.fechaEdu, this.imagenEdu);
    if (this.nombreEdu === "") {
      alert("El nombre es necesario")
    } else if (this.descripcionEdu === "") {
      alert("Es necesario poner una descripción")
    } else if (this.fechaEdu === "") {
      alert("Es necesario colocar fecha")
    } else if (this.imagenEdu === "") {
      alert("Es necesario colocar una imagen para la educación")
    }
    else {
      this.educacionS.save(soft).subscribe(data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló creación de nueva educación");
      })
    }
  }
}
