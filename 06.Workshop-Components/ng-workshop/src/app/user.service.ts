import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  isLogged = false;

  constructor(private storage: StorageService) {
    this.isLogged = this.storage.getItem('isLogget') || false;
  }

  login(): void{
    this.isLogged = true;
    this.storage.setItem('isLogget', true);
  }

  logout(): void{
    this.isLogged = false;
    this.storage.setItem('isLogget', false);
  }
}
