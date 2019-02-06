import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private text: BehaviorSubject<string> = new BehaviorSubject('');
  private description: BehaviorSubject<string> = new BehaviorSubject('');

  setText(text: string) {
    this.text.next(text);
  }

  getText(): Observable<string> {
    return this.text.pipe(distinctUntilChanged());
  }

  setDescription(description: string) {
    this.description.next(description);
  }

  getDescription(): Observable<string> {
    return this.description.pipe(distinctUntilChanged());
  }

  getTextValue(): string {
    return this.text.value;
  }
}
