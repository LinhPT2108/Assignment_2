import { TestBed } from '@angular/core/testing';

import { QuizsService } from './quizs.service';

describe('QuizsService', () => {
  let service: QuizsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
