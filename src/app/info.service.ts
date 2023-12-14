import { Injectable } from '@angular/core';
import { ContactInfoType } from './app.type';



@Injectable({
  providedIn: 'root'
})
export class InfoService {
  contactInfo: ContactInfoType = {
    companyName :"M Business Solutions LLC.",
    emailId: "contact@mbusinesssolution.com",
    phone: "717-771-1234"
  }

  constructor() { }
}
