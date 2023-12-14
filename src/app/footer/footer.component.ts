import { Component, inject } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  infoService = inject(InfoService)
}
