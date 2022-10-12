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
  porcentajeSS: number = 0;


  constructor(private softSkillsS: SoftSkillsService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const soft = new SoftSkills(this.nombreSS, this.porcentajeSS);
    if (this.nombreSS === "") {
      alert("El nombre es necesario")
    } else if (this.porcentajeSS < 0 || this.porcentajeSS > 100 || this.porcentajeSS === null) {
      alert("El porcentaje de la habilidad debe ser entre 0 a 100. El valor " + this.porcentajeSS + " no es válido")
    }
    else {
      this.softSkillsS.save(soft).subscribe(data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló creación de nueva habilidad");
      })
    }
  }
}
