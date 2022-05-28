import { FirebaseDatabaseService } from './firebase-db.service';
import { TestBed } from '@angular/core/testing';


describe('FirebaseDatabaseService', () => {
  let service: FirebaseDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
