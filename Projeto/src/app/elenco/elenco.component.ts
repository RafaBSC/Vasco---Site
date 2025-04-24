import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elenco',
  imports: [CommonModule, RouterModule],
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})

export class ElencoComponent implements OnInit{
goleiros: any[] = [];
ld: any[] = [];
zagueiro: any[] = [];
le: any[] = [];
volantes: any[] = [];
meio: any[] = [];
atacantes: any[] = [];

constructor(private appService: AppService) {}

ngOnInit() {
  this.goleiros = this.appService.getGoleiros();
  this.ld = this.appService.getLd();
  this.zagueiro = this.appService.getZagueiro();
  this.le = this.appService.getLe();
  this.volantes = this.appService.getVolantes();
  this.meio = this.appService.getMeio();
  this.atacantes = this.appService.getAtacantes();
  }
}


