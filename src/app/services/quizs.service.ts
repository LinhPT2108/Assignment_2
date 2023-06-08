import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetIdService } from './get-id.service';

@Injectable({
  providedIn: 'root',
})
export class QuizsService {
  constructor(private http: HttpClient, private id: GetIdService) {}
  getQuestion(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:3000/quizs/' + this.id.getValue()
    );
  }
}
