import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CardService } from '../providers/card.service';

@Injectable()
export class CardResolver implements Resolve<string> {

  constructor(private cardService: CardService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    return this.cardService.getText();
  }
}
