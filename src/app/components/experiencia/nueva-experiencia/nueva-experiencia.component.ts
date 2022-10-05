import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaSService } from 'src/app/service/experiencia-s.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreExp: string = '';
  descripcionExp: string = '';
  fechaExp: string = '';
  imagenExp: string = '';

  constructor(private experienciaS: ExperienciaSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcionExp, this.fechaExp, this.imagenExp);
    this.experienciaS.save(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })

  }
}
