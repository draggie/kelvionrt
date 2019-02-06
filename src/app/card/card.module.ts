import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardService } from '@app/core/providers/card.service';
import { SimpleCardComponent } from '@app/simple-card/simple-card.component';

import { CardRouting } from './card.routing';

@NgModule({
  declarations: [SimpleCardComponent],
  providers: [CardService],
  imports: [
    CommonModule,
    CardRouting,
  ],
})
export class CardModule { }
