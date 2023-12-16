import { Component, inject } from '@angular/core';
import { CurrentOpeningsService } from './current-openings.service';
import { Observable } from 'rxjs';
import { JobType } from './current-openings.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-current-openings',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  providers: [CurrentOpeningsService],
  templateUrl: './current-openings.component.html',
  styleUrl: './current-openings.component.scss'
})
export class CurrentOpeningsComponent {
  private jobService = inject(CurrentOpeningsService);
  jobs$!: Observable<JobType[]>;

  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobOpenings();
  }

}
