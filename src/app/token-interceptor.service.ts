import { Injectable, Injector } from '@angular/core';
import {  HttpHandler, HttpInterceptor,HttpEvent, HttpRequest} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    let authService = this.injector.get(AuthService)
    let tokenizedReq=req.clone({
      setHeaders:{Authorization:`Bearer ${authService.getToken()}`}
    })
    return next.handle(tokenizedReq);
  }
}
