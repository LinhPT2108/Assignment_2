import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  url: String = 'https://quizeasy.onrender.com/';
  constructor() {}
  getAPI(): String {
    return this.url;
  }
}
