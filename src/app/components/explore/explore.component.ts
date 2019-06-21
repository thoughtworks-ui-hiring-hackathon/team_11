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

  constructor(private exploreService: ExploreService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getMovies();
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

}
