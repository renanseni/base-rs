import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../../shared/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    let test = JSON.parse(localStorage.getItem('userData'));
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get CurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const body = `username=${username}&password=${password}&grant_type=password`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'CompanyDomain': environment.defaultDomain
    });
    return this.http.post<any>(`${environment.serviceBase}token`, body, { 'headers': headers })
      .pipe(map(user => {
        //login sucessful if there's a token in reponse
        if (user && user.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
