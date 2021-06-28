import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Ngo} from './ngo';
import {catchError} from 'rxjs/operators';

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

  getAll(): Observable<Ngo[]> {
    return this.httpClient.get<Ngo[]>(this.apiURL + '/posts/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id): Observable<Ngo> {
    return this.httpClient.get<Ngo>(this.apiURL + '/posts/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id, ngo): Observable<Ngo> {
    return this.httpClient.put<Ngo>(this.apiURL + '/posts/' + id, JSON.stringify(ngo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.httpClient.delete<Ngo>(this.apiURL + '/posts/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

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
