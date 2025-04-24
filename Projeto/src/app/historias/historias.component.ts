import { Component, OnInit } from '@angular/core';
import { ComponenteCardComponent } from '../componente-card/componente-card.component';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Historia {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}

@Component({
  selector: 'app-historias',
  imports: [ComponenteCardComponent, CommonModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './historias.component.html',
  styleUrl: './historias.component.css'
})

export class HistoriasComponent implements OnInit{
  historias: any[] = [];
  historiaForm!: FormGroup;
  
  formularioAberto: boolean = false;
  alternarFormulario() {
    this.formularioAberto = !this.formularioAberto;
  }

  constructor(private appService: AppService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.historias = this.appService.getHistorias();

    this.historiaForm = this.fb.group({
      imagem: [''],
      titulo: [''],
      descricao: [''],
      link: [''],
      historia: [''],
    });
  }
  
  adicionarHistoria() {
    const novaHistoria = this.historiaForm.value;
    novaHistoria.link = (this.historias.length + 1).toString();

    this.appService.addHistoria(novaHistoria);
    this.historiaForm.reset(); 
  }

}
