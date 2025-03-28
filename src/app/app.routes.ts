import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaitemsComponent } from './listaitems/listaitems.component';
import { BrowserModule } from '@angular/platform-browser';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioitemComponent } from './formularioitem/formularioitem.component';
import { ListaprestamosComponent } from './listaprestamos/listaprestamos.component';
import { CrearprestamoComponent } from './crearprestamo/crearprestamo.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
  { path: '', component:InicioComponent},
  { path: 'listaitems', component: ListaitemsComponent },
  { path: 'formularioitem', component:FormularioitemComponent },
  { path: 'listaprestamos', component:ListaprestamosComponent },
  { path: 'crearprestamo', component:CrearprestamoComponent},
  {path: 'prueba',component:PruebaComponent}
];



