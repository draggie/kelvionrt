import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '@app/core/providers/request.service';

import { IResponse } from './simple-card.interface';

@Component({
  selector: 'rt-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {
  @Input() textToDisplay: string;
  @Input() description: string;
  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  clicked() {
    this.requestService.sendRequest().subscribe((result: IResponse) => {
      this.description = result.title;
    });
  }
}
