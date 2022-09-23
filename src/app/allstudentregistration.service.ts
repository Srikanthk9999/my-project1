import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allstudentregistration } from './allstudentregistration';

@Injectable({
  providedIn: 'root',
})
export class AllstudentregistrationService {
  constructor(private _httpClient: HttpClient) {}

  getAllStudentregistration(): Observable<Allstudentregistration[]> {
    return this._httpClient.get<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students'
    );
  }

  getAllstudentregistration(id: string): Observable<Allstudentregistration[]> {
    return this._httpClient.get<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students' + '/' + id
    );
  }
  getFilterAllstudentRegistration(
    value: string
  ): Observable<Allstudentregistration[]> {
    return this._httpClient.get<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students' +
        '?filter=' +
        value
    );
  }

  getpagedAllstudentRegistration(
    pageNo: number
  ): Observable<Allstudentregistration[]> {
    return this._httpClient.get<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students' +
        '?limit=10page=1' +
        pageNo
    );
  }

  getSortedAllstudentRegistration(
    column: string,
    order: string
  ): Observable<Allstudentregistration[]> {
    return this._httpClient.get<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students' +
        '?sortBy=' +
        column +
        '&order=' +
        order
    );
  }

  createdStudentregistration(
    allstudentregistration: Allstudentregistration
  ): Observable<Allstudentregistration> {
    return this._httpClient.post<Allstudentregistration>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students',
      allstudentregistration
    );
  }

  updatedAllstidentregistration(
    id: string,
    allstudentregistration: Allstudentregistration
  ): Observable<Allstudentregistration[]> {
    return this._httpClient.put<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students' + '/' + id,
      allstudentregistration
    );
  }

  DeleteAllstudentRegistration(
    id: string
  ): Observable<Allstudentregistration[]> {
    return this._httpClient.delete<Allstudentregistration[]>(
      'https://62b9299dff109cd1dc8ca34f.mockapi.io/students' + '/' + id
    );
  }
}
