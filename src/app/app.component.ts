import { Component } from '@angular/core';

import { CardService } from './core/providers/card.service';

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rtSelect';
  description: string;
  input: string;

  constructor(private cardService: CardService) {}

  textChange(text: string) {
    this.cardService.setText(text);
  }

  descriptionChange(description: string) {
    this.cardService.setDescription(description);
  }

}
