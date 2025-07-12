import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from './models/registration.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  private apiUrl = 'https://codingexercise.speakcore.com/api/registrations';
  constructor(private http: HttpClient) { }

  register(registration: Registration) {
    return this.http.post(`${this.apiUrl}?key=${registration.email}`, registration);
  }

  getRegistration(registrationId: string): Observable<Registration> {
    return this.http.get<Registration>(`${this.apiUrl}/${registrationId}?key=your-email@example.com`);
  }

  deleteRegistration(registrationId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${registrationId}?key=your-email@example.com`);
  }
}
