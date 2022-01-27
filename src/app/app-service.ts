import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiServer = environment.onsApiService;

  constructor(private httpClient: HttpClient) { }

    getOnsDescription(): Observable<string> {
        return this.httpClient.get<string>(this.apiServer + '/jsonapi/taxonomy_term/ons_category');
    }
}
