import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/modelos/softSkills';
import { SoftSkillsService } from 'src/app/service/soft-skills.service';

@Component({
  selector: 'app-editar-soft-skills',
  templateUrl: './editar-soft-skills.component.html',
  styleUrls: ['./editar-soft-skills.component.css']
})
export class EditarSoftSkillsComponent implements OnInit {

  soft: SoftSkills = null;

  constructor(private softSkillsS: SoftSkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillsS.detail(id).subscribe(data => {
      this.soft = data;
    }, err => {
      alert('Error al modificar habilidad');
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.soft.porcentajeSS > 100 || this.soft.porcentajeSS < 0 || this.soft.porcentajeSS === null || this.soft.nombreSS === "") {
      alert("Es necesario que la habilidad tenga NOMBRE y su VALOR sea entre 0 y 100")
    } else {
      this.softSkillsS.update(id, this.soft).subscribe(data => {
        alert("Habilidad actualizada")
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar habilidad');
      })
    }
  }
}
