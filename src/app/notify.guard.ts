import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentroute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextstate: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm("if you back your progess will not save, Are you willing to go back?")
  }
  
}
