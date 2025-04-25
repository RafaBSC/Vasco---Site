import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-historia-detalhes',
  imports: [RouterModule],
  templateUrl: './historia-detalhes.component.html',
  styleUrls: ['./historia-detalhes.component.css']
})
export class HistoriaDetalhesComponent implements OnInit {
  titulo: string = '';
  historia: string = '';

  constructor(private route: ActivatedRoute, public appService: AppService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); 
      if (id) {
        const historiaSelecionada = this.appService.getHistoria(+id)
        if (historiaSelecionada) {
          this.titulo = historiaSelecionada.titulo;
          this.historia = historiaSelecionada.historia;
        }
      }
    });
  }
}
