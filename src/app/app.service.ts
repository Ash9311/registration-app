import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 currentTab = 'login';
  constructor() { }
}
