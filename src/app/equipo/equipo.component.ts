import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //importación echa para las rutas dinamicas con ID
import { EquipoService } from './../equipo.service';//importo el servicio
@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipo: any[] =[];
  constructor(
    private ruta:ActivatedRoute,
    private _servicio:EquipoService
  ) 
  {
    this.ruta.params.subscribe(params=>{//con ruta obtenemos el url, con params lo estamos leyendo
      console.log(params['id']);
      this.equipo = _servicio.obtenerUno(params['id']);
    }
    ) 
   }
   
  ngOnInit() {
  }
}
