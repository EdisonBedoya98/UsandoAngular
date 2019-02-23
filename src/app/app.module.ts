import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import { EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { MediaComponent } from './media/media.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormsComponent } from './forms/forms.component';
import { InicioComponent } from './inicio/inicio.component';
import { from } from 'rxjs';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'ngfor', component: NgForComponent },
  { path: 'equipo/:id', component: EquipoComponent },//id es una variable
  { path: 'forms', component: FormsComponent },
  { path: 'cuerpo', component: CuerpoComponent },
  { path: '',  component: InicioComponent, pathMatch: 'full' },
  { path: '**',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    MediaComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    FormsComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
