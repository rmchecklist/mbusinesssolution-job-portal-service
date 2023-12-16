import { Component, inject } from '@angular/core';
import { InfoService } from '../../info.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  infoService = inject(InfoService);
}
