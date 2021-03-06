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

    istoken(TokenName: any): any{
        if(this.cookie.get(TokenName)){
            return true;
        }else{
            return false;
        }
    }

    gettoken(TokenName: any): any{
        return this.cookie.get(TokenName);
    }

    decodetoekn(TokenName: any): any{
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.cookie.get(TokenName));
        const UserEmail = decodedToken.Email;
        return UserEmail;       
    }
}
