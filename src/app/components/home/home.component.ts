import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: News[] =[]
  charity:Array<any>=[];

  constructor(private newService: NewsService) {
    this.charity = [
      {"icon": "fas fa-map-marker-alt fa-3x", "name":"find place"},
      {"icon": "fas fa-eye fa-3x", "name":"Toufola"},
      {"icon": "fas fa-child fa-3x", "name":"A'awan"},
      {"icon": "fas fa-phone fa-3x", "name":"fundraising"},
      {"icon": "fas fa-info fa-3x", "name":"omniat"},
      {"icon": "fas fa-hand-holding-heart fa-3x", "name":"zakat"},
      {"icon": "fas fa-history fa-3x", "name":"give time"}
    ]

   }

  ngOnInit(): void {
    this.newService.getNews().subscribe(res => {
      this.articles = res['articles'];     
    })
  }

}
