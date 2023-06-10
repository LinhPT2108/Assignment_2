import { Component, OnInit } from '@angular/core';
import { QuizsService } from '../services/quizs.service';
import { GetIdService } from '../services/get-id.service';
import { interval, map, takeWhile } from 'rxjs';
import { __values } from 'tslib';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: any;
  idSubject: string = '';
  shuffled: any;
  timeOut = 600;
  show: string = '';
  isSubmit = false;
  marks: any;

  constructor(private question: QuizsService, private id: GetIdService) {}

  ngOnInit(): void {
    this.setLock();
    this.question.getQuestion().subscribe((res) => {
      this.questions = res.data;
      this.idSubject = this.id.getValue();
    });
  }

  public randomListQuestion() {
    if (this.questions != undefined) {
      if (!this.shuffled) {
        this.shuffled = Array.from(
          this.questions.slice().sort(() => 0.5 - Math.random())
        );
      }
      return this.shuffled.slice(0, 10);
    }
    return [];
  }

  public setLock(): void {
    if (this.timeOut >= 0) {
      setInterval(() => {
        const minutes = Math.floor(this.timeOut / 60);
        const seconds = Math.floor(this.timeOut % 60);
        this.show = `${minutes < 10 ? '0' : ''}${minutes}:${
          seconds < 10 ? '0' : ''
        }${seconds}`;
        this.timeOut -= 1;
      }, 1000);
    } else {
    }
  }

  public submitQuestion(form: NgForm): void {
    this.isSubmit = true;
    let marks = 0;
    for (const key in form.value) {
      this.shuffled.forEach((ques: any) => {
        if (ques.AnswerId == form.value[key]) {
          marks++;
          ques.correct = true;
        }
      });
    }
    this.marks = marks;
  }
}
