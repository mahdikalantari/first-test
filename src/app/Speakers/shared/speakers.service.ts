import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse   } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  apiURL = 'https://conferenceapi.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}

  public GetSpeakers(): any{
    return this.httpClient.get(`${this.apiURL}/speakers`);
  }
  public getSessions(href: string ): any{
    return this.httpClient.get(`${href}/sessions`);
  }

  public GetToolTip(href: string): any{

    // @ts-ignore
    return this.httpClient.get<string>(href, { responseType: 'text' });
  }
}
