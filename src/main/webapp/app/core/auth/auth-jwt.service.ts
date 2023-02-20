import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { ApplicationConfigService } from '../config/application-config.service';
import { Login } from 'app/login/login.model';

type JwtToken = {
  token: string;
  refreshToken: string;
};

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private applicationConfigService: ApplicationConfigService
  ) {}

  getToken(): string {
    const tokenInLocalStorage: string | null = this.localStorageService.retrieve('authenticationToken');
    const tokenInSessionStorage: string | null = this.sessionStorageService.retrieve('authenticationToken');
    return tokenInLocalStorage ?? tokenInSessionStorage ?? '';
  }

  getRefreshToken(): string {
    const refreshTokenInLocalStorage: string | null = this.localStorageService.retrieve('authenticationToken');
    const refreshTokenInSessionStorage: string | null = this.sessionStorageService.retrieve('authenticationToken');
    return refreshTokenInLocalStorage ?? refreshTokenInSessionStorage ?? '';
  }

  login(credentials: Login): Observable<void> {
    return this.http
      .post<JwtToken>(this.applicationConfigService.getEndpointFor('api/public/account/authenticate'), credentials)
      .pipe(map(response => this.authenticateSuccess(response)));
  }

  refresh(): Observable<void> {
    const refreshToken = this.getRefreshToken();
    return this.http
      .get<JwtToken>(this.applicationConfigService.getEndpointFor('api/public/account/token/refresh?refresh=' + refreshToken))
      .pipe(map(response => this.authenticateSuccess(response)));
  }

  logout(): Observable<void> {

    return this.http
      .post<JwtToken>(this.applicationConfigService.getEndpointFor('api/private/account/logout'), {})
      .pipe(map(() => this.logoutSuccess()));
  }

  private logoutSuccess(): void {
    this.localStorageService.clear('authenticationToken');
    this.sessionStorageService.clear('authenticationToken');

  }

  private authenticateSuccess(response: JwtToken): void {
    const jwt = response.token;
    const refreshToken = response.refreshToken;
    this.sessionStorageService.store('authenticationToken', jwt);
    this.sessionStorageService.store('authenticationRefreshToken', refreshToken);
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('authenticationRefreshToken');
  }
}
