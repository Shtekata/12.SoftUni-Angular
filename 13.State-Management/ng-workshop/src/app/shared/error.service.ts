import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  errorStrongMessage: string;
  errorInfoMessage: string;

  constructor() { }

  clearMessage(type: string) {
    setTimeout(() => type === 'strong' ? this.errorStrongMessage = '' : this.errorInfoMessage = '', 3000);
  }
}
