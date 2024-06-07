import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://dogbreeddb.p.rapidapi.com/paginated';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '77b0151ad1msh6fb538d12785428p197c68jsna0466b5ad361',
  });

  getBreeds(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?page=${page}`, {
      headers: this.headers,
    });
  }

  searchBreeds(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?search=${query}`, {
      headers: this.headers,
    });
  }
}
