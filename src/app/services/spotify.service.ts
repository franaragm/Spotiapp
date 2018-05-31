import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBBE_vLHLZuqM6g-CWHMGBX0SIv0i0BdQuH7uLfcZBQedlGWEJaewYEzduuCslwchzyFxiX1SncwZGajOE'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe( data => {
        console.log(data);
      });

  }
}
