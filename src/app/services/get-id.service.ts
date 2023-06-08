import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetIdService {
  public idQuestion: string = '';
  constructor() {}
  setValue(value: string): void {
    this.idQuestion = value;
  }
  getValue(): string {
    return this.idQuestion;
  }
}
