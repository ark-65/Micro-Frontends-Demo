import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  newObj = Object.create(null);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const systemControl = JSON.parse(
      String(sessionStorage.getItem('systemControlModel'))
    );
    this.flattenObj(systemControl);
    const currentUrl = state.url.replace('/main', '');
    console.log(this.newObj[currentUrl]);
    const canActive = this.newObj[currentUrl].data.use;
    if (canActive) {
      return true;
    } else {
      return false;
    }
  }
  flattenObj(obj: object): void {
    for (const key of Object.keys(obj)) {
      // @ts-ignore
      if (!obj[key].children) {
        // @ts-ignore
        this.newObj[key] = obj[key];
      } else {
        // @ts-ignore
        this.flattenObj(obj[key].children);
      }
    }
  }
}
