import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

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
