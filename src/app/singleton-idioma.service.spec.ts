import { TestBed } from '@angular/core/testing';

import { SingletonIdiomaService } from './singleton-idioma.service';

describe('SingletonIdiomaService', () => {
  let service: SingletonIdiomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonIdiomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
