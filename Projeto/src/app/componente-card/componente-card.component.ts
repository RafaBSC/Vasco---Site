import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-componente-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './componente-card.component.html',
  standalone: true,
  styleUrl: './componente-card.component.css'
})
export class ComponenteCardComponent {
  @Input() Imagem: string = '';
  @Input() Titulo: string = '';
  @Input() Descricao: string = '';
  @Input() Link: string = '#';
  @Input() BotaoTexto: string = 'Ver mais';

  @Input() mostrarBotao: boolean = true;

  constructor(private router: Router) {} 

  irParaHome() {
    this.router.navigate(['/home']); 
  }

}


