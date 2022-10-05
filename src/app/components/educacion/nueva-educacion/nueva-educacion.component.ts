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
    const expe = new Educacion(this.nombreEdu, this.descripcionEdu, this.fechaEdu, this.imagenEdu);
    this.educacionS.save(expe).subscribe(data => {
      alert("Educación añadida");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo agregar educación"); 
    })
  }
}
