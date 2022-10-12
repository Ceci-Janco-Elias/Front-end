import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/modelos/hardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';

@Component({
  selector: 'app-nueva-hard-skills',
  templateUrl: './nueva-hard-skills.component.html',
  styleUrls: ['./nueva-hard-skills.component.css']
})
export class NuevaHardSkillsComponent implements OnInit {

  nombreHS: string = '';
  porcentajeHS: number = 0;


  constructor(private hardSkillsS: HardSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const soft = new HardSkills(this.nombreHS, this.porcentajeHS);
    if (this.nombreHS === "") {
      alert("El nombre es necesario")
    } else if (this.porcentajeHS < 0 || this.porcentajeHS > 100 || this.porcentajeHS === null) {
      alert("El porcentaje de la habilidad debe ser entre 0 a 100. El valor " + this.porcentajeHS + " no es válido")
    }
    else {
      this.hardSkillsS.save(soft).subscribe(data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló creación de nueva habilidad");
      })
    }
  }
}
