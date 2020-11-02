import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { toggleFade } from './shared/animations/toggle-fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[toggleFade]
})
export class AppComponent {
  title = 'workshop';
  // showMenu : boolean = false
  constructor(public menuService: MenuService){}
}
