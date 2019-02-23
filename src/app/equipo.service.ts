import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo: any[] = [
    {
      nombre: 'Edison',
      especialidad: 'HTML',
      descripcion: 'Angular (comúnmente llamado "Angular 2+" o "Angular 2"), es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.'      
    },
    {
      nombre: 'Maria', 
      especialidad: 'CSS',
      descripcion: 'Angular (comúnmente llamado "Angular 2+" o "Angular 2"), es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.'      
    }
  ]
  constructor() {
    console.log('funcionando servicio');
  }
  obtenerEquipo(){
    return this.equipo;
  }
  obtenerUno(i){
    return this.equipo[i];
  }
}
