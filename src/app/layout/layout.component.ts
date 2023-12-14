import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, MainContentComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
