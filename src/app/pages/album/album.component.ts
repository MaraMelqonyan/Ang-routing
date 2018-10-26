import {Component, OnInit} from '@angular/core';
import {AlbumsService} from '../../services/albums.service';
import {AlbumModel} from '../../core/models/album.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumsComponent implements OnInit {

  public albumsData: Array<AlbumModel> = [];

  constructor(private route: ActivatedRoute, public albumsService: AlbumsService) {
  }

  ngOnInit() {
    this.albumsService.getAllbums()
      .subscribe((data: Array<AlbumModel>) => {
        this.albumsData = data;
        console.log(data);
      }, (err) => {
        console.log(err);
      });
  }


}
