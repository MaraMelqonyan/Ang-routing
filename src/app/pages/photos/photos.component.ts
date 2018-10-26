import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AlbumsService} from '../../services/albums.service';
import {PhotoModel} from '../../core/models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public activeId;
  public albumephoto: Array<PhotoModel> = [];

  constructor(private activeRoute: ActivatedRoute, private albumeService: AlbumsService) {

    this.activeId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.albumeService.getAlbumsById(this.activeId)
      .subscribe((data: Array<PhotoModel>) => {
        this.albumephoto = data;
      }, (err) => {
        console.log(err);
      });
  }

}
