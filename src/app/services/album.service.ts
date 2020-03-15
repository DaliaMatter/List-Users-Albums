import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/Album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albumUrl = 'https://jsonplaceholder.typicode.com/albums';
  albumLimit = '?_limit=15';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumUrl}${this.albumLimit}`);
  }
}
