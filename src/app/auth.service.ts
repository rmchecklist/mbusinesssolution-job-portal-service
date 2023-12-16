// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'your_api_base_url'; // Replace with your actual API base URL

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`; // Replace with your login API endpoint
    // You may need to pass login credentials or other parameters based on your API
    return this.http.post(loginUrl, {/* login data */});
  }

  join(): Observable<any> {
    const joinUrl = `${this.apiUrl}/join`; // Replace with your join API endpoint
    // You may need to pass join credentials or other parameters based on your API
    return this.http.post(joinUrl, {/* join data */});
  }
}
