import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {io} from 'socket.io-client';
import {HttpClient} from '@angular/common/http';
import {NotificationList} from './model/notificationList';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }

  listen() {
    return new Observable((subscriber) => {
      this.socket.on('notification', res => {
        subscriber.next(res);
      });
    });
  }

  getNotifications(): Observable<NotificationList> {
    return this.http.get<NotificationList>(`http://172.20.10.7:8080/notification/notification/notification-by-receiver-name`);
  }
}
