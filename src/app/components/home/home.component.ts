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
    
  }

  getTrendingMovies() {
    this.homeService.getTrendingMovies().subscribe(data => {
      if (data && data['result']) {
        this.trendingMovies = data['result'];
      }
    });
  }

  getLatestMovies() {
    this.homeService.getLatestMovies().subscribe(data => {
      if (data && data['result']) {
        this.latestMovies = data['result'];
      }
    });
  }

  getPopularMovies() {
    this.homeService.getPopularMovies().subscribe(data => {
      if (data && data['result']) {
        this.popularMovies = data['result'];
      }
    });
  }

}
