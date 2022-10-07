import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from 'src/app/modelos/softSkills';
import { SoftSkillsService } from 'src/app/service/soft-skills.service';

@Component({
  selector: 'app-nueva-soft-skills',
  templateUrl: './nueva-soft-skills.component.html',
  styleUrls: ['./nueva-soft-skills.component.css']
})
export class NuevaSoftSkillsComponent implements OnInit {

  nombreSS: string = '';
  porcentajeSS: string = '';


  constructor(private softSkillsS: SoftSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const soft = new SoftSkills(this.nombreSS, this.porcentajeSS);
    this.softSkillsS.save(soft).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló creación de nueva habilidad");
    })
  }

}
