import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private _api_url = 'router';

  get apiURL(): string{
      return this._api_url;
  }
  
}
