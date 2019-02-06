import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  sendRequest(): Observable<unknown> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
