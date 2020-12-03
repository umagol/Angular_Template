import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt/lib/jwthelper.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class TokenService {

    constructor( 
        private cookie: CookieService,
        ) { }

    SetToken(token: any): any{
        this.cookie.set('access-token',token);
    }

    istoken(): any{
        if(this.cookie.get('access-token')){
            return true;
        }else{
            return false;
        }
    }

    gettoken(): any{
        return this.cookie.get('access-token');
    }

    decodetoekn(): any{
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.cookie.get('access-token'));
        const UserEmail = decodedToken.Email;
        return UserEmail;       
    }
}