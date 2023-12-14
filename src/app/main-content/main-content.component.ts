import { Component, inject } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  infoService = inject(InfoService);
}
