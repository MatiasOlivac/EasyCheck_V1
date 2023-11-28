import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
 // Reemplaza 'ruta-de-tu-servicio-indexdb' con la ruta correcta
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  router: any;

  constructor(private indexDBService: DataService) {} 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.verificarIngreso();
  }

  async verificarIngreso(): Promise<boolean | UrlTree> {
    try {
      // Realiza la lógica de acceso a tu base de datos IndexDB
      const usuarioIngresado = await this.indexDBService.isAuthenticatedStatus(); // Reemplaza con el método adecuado de tu servicio

      // Verifica si el usuario está ingresado
      if (usuarioIngresado) {
        // Usuario ingresado, permite el acceso
        return true; // cambiar a false
      } else {
        // Usuario no ingresado, redirige a una página de acceso
        return this.redirigirALogin();
      }
    } catch (error) {
      console.error('Error al verificar el ingreso:', error);
      // Maneja el error de acuerdo a tus necesidades
      return false;
    }
  }

  redirigirALogin(): UrlTree {
    // Aquí deberías redirigir a la página de inicio de sesión
    // Reemplaza '/login' con la ruta correcta de tu página de inicio de sesión
    return this.router.parseUrl('/login');
  }
}
