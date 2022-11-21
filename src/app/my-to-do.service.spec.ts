import { TestBed } from '@angular/core/testing';

import { MyToDoService } from './my-to-do.service';

describe('MyToDoService', () => {
  let service: MyToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
