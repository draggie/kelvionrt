import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../providers/card.service';

@Injectable({
  providedIn: 'root',
})
export class CardGuard implements CanActivate {
  constructor(private cardService: CardService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.cardService.getTextValue() !== 'stop';
  }
}
