import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { rotate } from '../animations/rotate';
import { toggleFade } from '../animations/toggle-fade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[rotate, toggleFade]
})
export class HeaderComponent implements OnInit {

  showSearch: boolean = false;
  constructor(public menuService: MenuService) { }

  toggleMenu(){
    this.menuService.showMenu = !this.menuService.showMenu
  }
  ngOnInit(): void {
  }
  toggleSearch(){
    this.showSearch = !this.showSearch
  }
}
