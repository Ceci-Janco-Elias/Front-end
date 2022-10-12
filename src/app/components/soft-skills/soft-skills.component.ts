import { Component, OnInit } from '@angular/core';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';
import { SoftSkills } from 'src/app/modelos/softSkills';
import { SoftSkillsService } from 'src/app/service/soft-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  softSkills: SoftSkills[] = [];

  constructor(private softSkillsS: SoftSkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSoftSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSoftSkills(): void {
    this.softSkillsS.lista().subscribe(data => { this.softSkills = data; })
  }

  delete(id?: number) {
    var resultado = confirm('¿Estás seguro de borrar habilidad?');
    if (resultado === true) {
      if (id != undefined) {
        this.softSkillsS.delete(id).subscribe(data => {
          alert("Habilidad eliminada")
          this.cargarSoftSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        })
      }
    } else {
      alert('No se eliminara la habilidad');
    }
  }
}