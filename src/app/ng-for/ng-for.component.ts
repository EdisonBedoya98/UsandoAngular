import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  cursos: string[] = ['HTML', 'ANGULAR', 'PHP','JS'];

  animales:Array<any>=[
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2},
    {tipo:'Pato',nombre:'Tantan',edad:7},
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2},
    {tipo:'Pato',nombre:'Tantan',edad:7},
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2},
    {tipo:'Pato',nombre:'Tantan',edad:7}
  ];



  constructor() {} 
  ngOnInit() {
  }

}
