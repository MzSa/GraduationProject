import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  readonly url: string = 'http://localhost:3000';

  constructor() {
    this.socket = io(this.url);
  }

  listen() {
    return new Observable((subscriber) => {
      this.socket.on('notification', res => {
        subscriber.next(res);
      });
    });
  }
}
