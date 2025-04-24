import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estadio',
  imports: [CommonModule, RouterModule],
  templateUrl: './estadio.component.html',
  styleUrl: './estadio.component.css'
})
export class EstadioComponent implements OnInit {
  listaEstadio: any[] = [];

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.listaEstadio = this.appService.listaEstadio;
  }
}
