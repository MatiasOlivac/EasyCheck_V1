import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usernameFromLocalStorage: string = '';

  constructor(private router: Router) {
    // Obtener el nombre de usuario del Local Storage al inicializar la página
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      this.usernameFromLocalStorage = userData.username;
    }
  }

  navigateLeft() {
    this.router.navigate(['/login']);
  }

  navigateRight() {   
    this.router.navigate(['/scanner']);
  }
}
