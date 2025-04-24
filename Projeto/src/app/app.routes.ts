import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaDetalhesComponent } from './historia-detalhes/historia-detalhes.component';
import { ElencoComponent } from './elenco/elenco.component';
import { EstadioComponent } from './estadio/estadio.component';
import { TitulosComponent } from './titulos/titulos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'historias', component: HistoriasComponent },
  { path: 'historia/:id', component: HistoriaDetalhesComponent },
  { path: 'historia/:id', component: HistoriaDetalhesComponent },
  { path: 'historia/:id', component: HistoriaDetalhesComponent },
  { path: 'elenco', component: ElencoComponent},
  { path: 'estadio', component: EstadioComponent},
  { path: 'titulos', component: TitulosComponent}
];