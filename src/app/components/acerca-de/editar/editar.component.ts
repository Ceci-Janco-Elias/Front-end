import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  pers : persona = null!;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(data =>{
      this.pers = data;
    }, err =>{
      alert('Error al modificar persona');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.pers).subscribe(data =>{
      alert('Persona actualizada')
      this.router.navigate(['']);
    }, err =>{
      alert('Error al modificar persona');
      this.router.navigate(['']);
    })
  }

}
