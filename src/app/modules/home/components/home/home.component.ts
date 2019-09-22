import { HomeService } from './../../service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private readonly homeService: HomeService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.homeService.getAll().subscribe(items => {
      var result = items;
    });
  }

}
