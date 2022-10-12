import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionSService } from 'src/app/service/educacion-s.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private educacionS: EducacionSService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(data => {
      this.educacion = data;
    }, err => {
      alert('Error al modificar educación');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.educacion.nombreEdu === "" || this.educacion.descripcionEdu === "" || this.educacion.fechaEdu === "" || this.educacion.imagenEdu === "") {
      alert("Ningun campo debe estar vacio");
    } else {
      this.educacionS.update(id, this.educacion).subscribe(data => {
        alert("Educación actualizada")
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar educación');
      })
    }
  }
}