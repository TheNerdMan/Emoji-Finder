import { TestBed } from '@angular/core/testing';

import { SetGeneratorService } from './set-generator.service';

describe('SetGeneratorService', () => {
  let service: SetGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
