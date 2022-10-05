import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaSService } from 'src/app/service/experiencia-s.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLab : Experiencia = null;

  constructor(private experienciaS: ExperienciaSService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(data =>{
      this.expLab = data;
    }, err =>{
      alert('Error al modificar experiencia');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.update(id, this.expLab).subscribe(data =>{
      alert("Experiencia actualizada")
      this.router.navigate(['']);
    }, err =>{
      alert('Error al modificar experiencia');
      this.router.navigate(['']);
    })
  }
}
