import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Catalog} from '../auth/register/model/catalog';
import {Hashtags} from '../auth/register/model/hashtags';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) {
  }

  getEvents() {
    return this.http.get(`http://localhost:8080/event`);
  }

  createEvent(event: any) {
    return this.http.post(`http://localhost:8080/event`, event);
  }

  updateEvent(event: { id: number }) {
    return this.http.put(`http://localhost:8080/event/${event.id}`, event);
  }

  deleteEvent(event: { id: number }) {
    return this.http.delete(`http://localhost:8080/event/${event.id}`);
  }

  getcatalogs(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`http://172.20.10.7:8080/ngo/catalog/all`, {
      headers: {'proxy': 'guest'}
    });
  }

  gethashtags(): Observable<Hashtags[]> {
    return this.http.get<Hashtags[]>(`http://172.20.10.7:8080/ngo/hashtag/all`, {
      headers: {'proxy': 'guest'}
    });
  }
}
