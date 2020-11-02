import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { Category } from '../../models/category';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
  articles: News[] =[]
  filteredArr: News[] =[]
  showAll : boolean = false
 categories: Category[] = []
 selectedValue: number;
 filterText: string;
 loading: boolean = false;

 
 
  constructor(private newService: NewsService, private router: Router, private filterPipe: FilterPipe) {}


  ngOnInit(): void {
      this.newService.getNews().subscribe(res => {
        this.articles = res['articles'];
        this.categories  = res['sourceCategory'];        
        this.filteredArr = this.articles
      })
    }
    loadMore(){
      this.showAll = true
    }
    search(){
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
        this.filteredArr = this.filterPipe.transform(this.articles,this.selectedValue, "sourceID", "title", this.filterText);     
        this.showAll = true
      }, 2000);
    }
}
