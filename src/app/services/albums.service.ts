import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AlbumModel} from '../core/models/album.model';
import {PhotoModel} from '../core/models/photo.model';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  public getAllbums(): Observable<Array<AlbumModel>> {
    return this.http.get<Array<AlbumModel>>('https://jsonplaceholder.typicode.com/albums');
  }

  public getAlbumsById(id): Observable<Array<PhotoModel>> {
    return this.http.get<Array<PhotoModel>>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

}
