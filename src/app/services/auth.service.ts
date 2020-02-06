import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {filter, shareReplay, tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class AuthService {

  private subject = new BehaviorSubject(null);

  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.user$ = this.subject.asObservable();
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
  }

  login(email: string, password: string): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>('/api/login', {email, password}, {headers})
      .pipe(
        tap(user => this.subject.next(user)),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
  }


}
