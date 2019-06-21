import { Component, OnInit, Input } from '@angular/core';
import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  providers: [ ExploreService ]
})
export class ExploreComponent implements OnInit {

  public movies:any = [];
  public searchFor:string = '';
  public rangeSelected: number = 3;
  public genres: any = [];
  public imageConfig = {
    baseurl: '',
    width: ''
  }

  constructor(private exploreService: ExploreService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getMovies();
    this.getGeneres();
    this.getImageConfig();
  }

  onSearch() {
    this.getMovies(this.searchFor);
  }

  getMovies(searchFor = '') {
    this.exploreService.getMovies(searchFor).subscribe(data => {
      if (data && data['results']) {
        this.movies = data['results'];
      }
    }, error => {
      this.movies;
    });
  }

  getGeneres() {
    this.exploreService.getGenres().subscribe(data => {
      if (data && data['genres']) {
        this.genres = data['genres'];
      }
    });
  }

  getImageConfig() {
    this.exploreService.getImageConfig().subscribe(data => {
      if (data && data['images']) {
        this.imageConfig.baseurl = data['images'].base_url;
        this.imageConfig.width = data['images'].poster_sizes[2];
      }
    });
  }

}
