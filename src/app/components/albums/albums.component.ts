import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/Album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumServices: AlbumService) { }

  ngOnInit() {
    this.albumServices.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
  }

}
