import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HistoriasComponent } from '../historias/historias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElencoComponent } from '../elenco/elenco.component';
import { EstadioComponent } from '../estadio/estadio.component';
import { TitulosComponent } from '../titulos/titulos.component';
import { AppService } from '../app.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'elenco', component: ElencoComponent},
  { path: 'estadio', component: EstadioComponent},
  { path: 'titulos', component: TitulosComponent},
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HistoriasComponent,
    ElencoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
    providers: [AppService],
    exports: [RouterModule, HistoriasComponent, RouterModule]
})
export class HomeModule { }
