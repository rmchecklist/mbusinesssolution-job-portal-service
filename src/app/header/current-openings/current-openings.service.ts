import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { JobType } from './current-openings.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentOpeningsService {

  private readonly jsonFilePath = 'assets/jobs.json';

  private http = inject(HttpClient);
  
  getJobOpenings(): Observable<JobType[]> {
    return this.http.get<JobType[]>(this.jsonFilePath);
  }
}