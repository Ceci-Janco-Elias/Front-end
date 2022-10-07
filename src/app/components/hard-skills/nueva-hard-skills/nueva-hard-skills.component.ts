import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/modelos/HardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';

@Component({
  selector: 'app-nueva-hard-skills',
  templateUrl: './nueva-hard-skills.component.html',
  styleUrls: ['./nueva-hard-skills.component.css']
})
export class NuevaHardSkillsComponent implements OnInit {

  nombreHS: string = '';
  porcentajeHS: string = '';


  constructor(private hardSkillsS: HardSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new HardSkills(this.nombreHS, this.porcentajeHS);
    this.hardSkillsS.save(expe).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló creación de nueva habilidad");
    })
  }
}
