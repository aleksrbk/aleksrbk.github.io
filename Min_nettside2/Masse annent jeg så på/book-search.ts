import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../bookservice';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'book-search',
  templateUrl: './bookservicehtml.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movies;
  startAt = new Subject()
  endAt = new Subject()

  constructor(private bookSvc: BookService) { }

  ngOnInit() {
    this.bookSvc.getBooks(this.startAt, this.endAt)
                  .subscribe(booker-a2f98 => this.movies = booker-a2f98)
  }

  search($event) {
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q+"\uf8ff")
  }

}
