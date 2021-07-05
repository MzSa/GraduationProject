import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(private http: HttpClient) {
  }

  addSponsor(sponsor) {
    return this.http.post(`http://172.20.10.7:8080/marketing/sponsor/add`, sponsor);
  }
}
