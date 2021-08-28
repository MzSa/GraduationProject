import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(private http: HttpClient) {
  }

  addSponsor(sponsor) {
    return this.http.post(`http://172.20.10.7:8080/marketing/sponsor/add`, sponsor);
  }

  getAllCompany(): Observable<any> {
    return this.http.get<any>(`http://172.20.10.7:8280/company/all`);
  }

  getCompanyByName(companyName: string): Observable<any> {
    const params = new HttpParams()
      .set('companyName', String(companyName))
    return this.http.get<any>(`http://172.20.10.7:8080/marketing/company/search`, {params});
  }

  addAdvertisement(ads): Observable<any> {
    return this.http.post<any>(`http://172.20.10.7:8080/marketing/dvertisement/add`, ads);
  }

  getAllAdvertisement(): Observable<any> {
    return this.http.get<any>(`http://172.20.10.7:8280/dvertisement/all`);
  }

  removeAdvertisementById(id: number) {
    const params = new HttpParams()
      .set('id', String(id))
    return this.http.delete(`http://172.20.10.7:8080/marketing/dvertisement`, {params});
  }
}
