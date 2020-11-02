import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/category';
import { News } from '../../../models/news';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
id: number;
news: News;
category: Category[];
categoryName: string;
categories : Category[] =[]
  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"]
    this.newsService.getNews().subscribe(res => {
      this.news = res['articles'][this.id]
      this.categories = res['sourceCategory']
      this.category =  this.categories.filter(item => item['id'] == this.news['sourceID'])
      this.categoryName = this.category[0].name
    })
    }
  }


