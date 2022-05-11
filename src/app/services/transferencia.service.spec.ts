import { TestBed } from '@angular/core/testing';

import { TransferenciaService as TransferenciaService } from './transferencia.service';

describe('TransferenciaServiceService', () => {
  let service: TransferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
