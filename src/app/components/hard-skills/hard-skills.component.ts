import { Component, OnInit } from '@angular/core';
import { HardSkills } from 'src/app/modelos/HardSkills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {

  hardSkills: HardSkills[] = [];

  constructor(private hardSkillsS: HardSkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHardSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHardSkills(): void {
    this.hardSkillsS.lista().subscribe(data => { this.hardSkills = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.hardSkillsS.delete(id).subscribe(data => {
        alert("Habilidad eliminada")
        this.cargarHardSkills();
      }, err => {
        alert("No se pudo borrar la habilidad");
      })
    }
  }
}
