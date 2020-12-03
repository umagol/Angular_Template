import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Base_Url = environment.ROOT_URL;
  constructor() { }

  login(model: any): any{
  }

  signup(model: any): any{
  }

  logout(): any{
  }
}