import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
import { GetIdService } from '../services/get-id.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  subjects: any;
  public idSubject: String = '';

  constructor(private subject: SubjectsService, private getId: GetIdService) {}

  ngOnInit(): void {
    this.subject.getList().subscribe((res) => {
      this.subjects = res;
    });
  }
  handleQuestion(id: any) {
    this.getId.setValue(id);
  }
}
