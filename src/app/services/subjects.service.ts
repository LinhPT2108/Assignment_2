import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private http: HttpClient, private api: APIService) {}
  getList(): Observable<any> {
    return this.http.get<any>(this.api.getAPI() + 'subjects');
  }
  getById(): Observable<any> {
    return this.http.get<any>(this.api.getAPI() + 'subjects/1');
  }
}
