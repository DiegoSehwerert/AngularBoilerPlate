import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
