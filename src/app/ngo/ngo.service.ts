import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NgoList} from './home/model/NgoList';
import {ResponseByIdModel} from './view/model/ResponseByIdModel';

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  private apiURL = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<NgoList> {
    return this.httpClient.get<NgoList>(`http://192.168.0.43:8080/ngo/NGO/all`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getById(id): Observable<ResponseByIdModel> {
    const params = new HttpParams()
      .append('id', String(id))
    return this.httpClient.get<ResponseByIdModel>(`http://192.168.0.43:8080/ngo/NGO/by-id`, {params})
      .pipe(
        catchError(this.errorHandler)
      )
  }

  // update(id, ngo): Observable<Ngo> {
  //   return this.httpClient.put<Ngo>(this.apiURL + '/posts/' + id, JSON.stringify(ngo), this.httpOptions)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     )
  // }
  //
  // delete(id) {
  //   return this.httpClient.delete<Ngo>(this.apiURL + '/posts/' + id, this.httpOptions)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     )
  // }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
