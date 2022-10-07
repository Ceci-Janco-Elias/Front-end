import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/modelos/hardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';

@Component({
  selector: 'app-editar-hard-skills',
  templateUrl: './editar-hard-skills.component.html',
  styleUrls: ['./editar-hard-skills.component.css']
})
export class EditarHardSkillsComponent implements OnInit {

  hard: HardSkills = null;

  constructor(private hardSkillsS: HardSkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardSkillsS.detail(id).subscribe(data => {
      this.hard = data;
    }, err => {
      alert('Error al modificar habilidad');
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardSkillsS.update(id, this.hard).subscribe(data => {
      alert("Habilidad actualizada")
      this.router.navigate(['']);
    }, err => {
      alert('Error al modificar habilidad');
    })
  }
}

