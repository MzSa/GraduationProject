import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Catalog} from '../auth/register/model/catalog';

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

  updateEvent(id: number, eventData: any) {
    return this.http.put(`http://localhost:8080/event/${id}`, eventData);
  }

  deleteEvent(id: number) {
    return this.http.delete(`http://localhost:8080/event/${id}`);
  }

  getcatalogs(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`http://172.20.10.7:8080/ngo/catalog/all`, {
      headers: {'proxy': 'guest'}
    });
  }
}
