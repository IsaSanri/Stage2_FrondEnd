import { TestBed } from '@angular/core/testing';

import { BooksInformationService } from './books-information.service';

describe('BooksInformationService', () => {
  let service: BooksInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
