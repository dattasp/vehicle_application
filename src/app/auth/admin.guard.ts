import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate():any{
    
    if(localStorage.getItem('Token'))
    {
      // this.router.navigate(['/admin/vehicle_list'])
      return true;
    }
    else
    {
      this.router.navigate(['/admin_login']);
      return false;
    }
  }
  
}
