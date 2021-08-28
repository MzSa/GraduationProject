import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Catalog} from '../auth/register/model/catalog';
import {ResponseNeed} from './publish-need/model/response-need';
import {PublishNeed} from './publish-need/model/publish-need';
import {NeedByIdModel} from './details-need/model/NeedByIdModel';
import {ResponseActionNeed} from './response-need/model/ResponseActionNeed';
import {ResponseUpdateModel} from './publish-need/model/response-update-model';
import {Statistic} from './statistics/statistic.model';
import {StatisticUser} from './statistic-user/statistic-user.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  public id = 0;

  constructor(private http: HttpClient) {
  }

  getNeeds(): Observable<ResponseNeed> {
    this.id = parseInt(localStorage.getItem('ngoId'));
    const params = new HttpParams()
      .set('ngoId', String(this.id))
    return this.http.get<ResponseNeed>(`http://172.20.10.7:8080/ngo/need/by-ngo-id`, {params});
  }

  getNeedById(id: number): Observable<ResponseUpdateModel> {
    const params = new HttpParams()
      .set('needId', String(id))
    return this.http.get<ResponseUpdateModel>(`http://172.20.10.7:8080/ngo/need/by-id-for-update`, {params});
  }

  getNeedByIdForDetails(id: number): Observable<NeedByIdModel> {
    const params = new HttpParams()
      .set('needId', String(id))
    return this.http.get<NeedByIdModel>(`http://172.20.10.7:8080/ngo/need/by-id`, {params});
  }

  createNeed(need: PublishNeed) {
    return this.http.post(`http://172.20.10.7:8080/ngo/need/add`, need);
  }

  updateNeed(needData: any) {
    return this.http.post(`http://172.20.10.7:8080/ngo/need/update`, needData);
  }

  deleteNeedById(id: number) {
    const params = new HttpParams()
      .set('needId', String(id))
    return this.http.post(`http://172.20.10.7:8080/ngo/need/delete-by-id`, '', {params});
  }

  getcatalogs(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`http://172.20.10.7:8080/ngo/catalog/all`, {
      headers: {'proxy': 'guest'}
    });
  }

  getNeedResponse(id: number) {
    const params = new HttpParams()
      .set('needId', String(id))
    return this.http.get<ResponseActionNeed>(`http://172.20.10.7:8080/ngo/need-response/get-by-need-id`, {params});
  }

  accept(id: number, action: string) {
    const params = new HttpParams()
      .append('needResponseId', String(id))
      .append('action', action);

    return this.http.post(`http://172.20.10.7:8080/ngo/need-response/take-action`, '', {params});
  }

  reject(id: number, action: string) {
    const params = new HttpParams()
      .append('needResponseId', String(id))
      .append('action', action);

    return this.http.post(`http://172.20.10.7:8080/ngo/need-response/take-action`, '', {params});
  }

  getNeedReportAll(): Observable<Statistic> {
    return this.http.get<Statistic>(`http://172.20.10.7:8080/ngo/need-report/all`);
  }

  getNeedReportAllForUser(): Observable<StatisticUser> {
    return this.http.get<StatisticUser>(`http://172.20.10.7:8080/user/user/user-statistic/get-all`);
  }

  getConfigurationForNgo(): Observable<any> {
    return this.http.get<any>(`http://172.20.10.7:8080/ngo/app-config/all`);
  }

  addConfigurationForNgo(config: any): Observable<any> {
    return this.http.post<any>(`http://172.20.10.7:8080/ngo/app-config/add`, config);
  }

  deleteConfigurationForNgo(configId: number) {
    const params = new HttpParams()
      .set('configId', String(configId))
    return this.http.delete<any>(`http://172.20.10.7:8080/ngo/app-config`, {params});
  }

  updateConfigurationForNgo(config: any) {
    return this.http.post<any>(`http://172.20.10.7:8080/ngo/app-config/add`, config);
  }

  searchNeeds(searchNeedsObject: any): Observable<ResponseNeed> {
    this.id = parseInt(localStorage.getItem('ngoId'));
    const params = new HttpParams()
      .set('ngoId', String(this.id))
      .set('catalog', searchNeedsObject.catalog)
      .set('statusName', searchNeedsObject.statusName)
      .set('hashTag', searchNeedsObject.hashTag)
    return this.http.get<ResponseNeed>(`http://172.20.10.7:8080/ngo/need/search`, {params});
  }
}
