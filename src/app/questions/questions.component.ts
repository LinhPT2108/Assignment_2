import { Component, OnInit } from '@angular/core';
import { QuizsService } from '../services/quizs.service';
import { SubjectsComponent } from '../subjects/subjects.component';
import { GetIdService } from '../services/get-id.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: any;
  idSubject: string = '';

  constructor(private question: QuizsService, private id: GetIdService) {}

  ngOnInit(): void {
    this.question.getQuestion().subscribe((res) => {
      this.questions = res.data;
      this.idSubject = this.id.getValue();
    });
  }

  public randomListQuestion() {
    const shuffled = this.questions.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
}
