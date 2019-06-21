import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public trendingMovies: any = [];
  public latestMovies: any = [];
  public popularMovies: any = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getTrendingMovies();
    this.getLatestMovies();
    this.popularMovies();
  }

  getTrendingMovies() {
    this.homeService.getTrendingMovies().subscribe(data => {
      if (data && data['results']) {
        this.trendingMovies = data['results'];
      }
    });
  }

  getLatestMovies() {
    this.homeService.getLatestMovies().subscribe(data => {
      if (data && data['results']) {
        this.latestMovies = data['results'];
      }
    });
  }

  getPopularMovies() {
    this.homeService.getPopularMovies().subscribe(data => {
      if (data && data['results']) {
        this.popularMovies = data['results'];
      }
    });
  }

}
