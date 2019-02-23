import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  equipo: any[] = [];

  constructor(private _servicio:EquipoService) {
    this.equipo = _servicio.obtenerEquipo();
   }
    
  ngOnInit() {
  }

}
