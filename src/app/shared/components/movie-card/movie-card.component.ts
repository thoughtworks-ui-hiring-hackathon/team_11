import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movies:any = [];
  @Input() genres: any = [];
  @Input() rating:number = 0;

  constructor() { }

  ngOnInit() {
  }

  getGenreCategoty(genre_ids) {
    let results: any[] = [];
    for (let i = 0; i < genre_ids.length; i++) {

      this.genres.find((value) => {
        if (genre_ids[i] === value.id) {
          results.push(value.name);
        }
      })

    }
    return results;
  }
}
