import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetIdService } from './get-id.service';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class QuizsService {
  constructor(
    private http: HttpClient,
    private id: GetIdService,
    private api: APIService
  ) {}
  getQuestion(): Observable<any> {
    return this.http.get<any>(
      this.api.getAPI() + 'quizs/' + this.id.getValue()
    );
  }
}
