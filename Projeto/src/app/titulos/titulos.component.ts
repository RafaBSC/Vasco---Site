import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponenteCardComponent } from '../componente-card/componente-card.component';

@Component({
  selector: 'app-titulos',
  imports: [ComponenteCardComponent, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './titulos.component.html',
  styleUrl: './titulos.component.css'
})
export class TitulosComponent {
  titulos: any[] = [];
  titulos2: any [] = [];
  titulos3: any [] = [];
  titulosTexto: any[] = [];
  subtitulo: any[] = [];
  subtitulo2: any[] = [];
  trofeis: any[] = [];
  trofeis2: any[] = [];

  tituloform!: FormGroup;

  constructor(private appService: AppService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.titulos = this.appService.getTitulos();
    this.titulos2 = this.appService.getTitulos2();
    this.titulos3 = this.appService.getTitulos3();
    this.titulosTexto = this.appService.getTexto();
    this.subtitulo = this.appService.getSubtitulo();
    this.subtitulo2 = this.appService.getSubtitulo2();
    this.trofeis = this.appService.getTrofeis();
    this.trofeis2 = this.appService.getTrofeis2();
    
    this.tituloform = this.fb.group({
      imagem: [''],
      titulo: [''],
    });
  }
}
