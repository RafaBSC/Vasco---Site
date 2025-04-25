import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public appService: AppService, private router: Router) {}

  irParaHistorias() {
    this.router.navigate(['/historias']); 
  }

  fecharMenu(event: Event) {
    event.preventDefault();
    const menu = document.querySelector('.dropdown-menu.show');
    if (menu) {
      menu.classList.remove('show');
    }
  }

}
