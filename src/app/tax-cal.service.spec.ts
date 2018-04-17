import { TestBed, inject } from '@angular/core/testing';

import { TaxCalService } from './tax-cal.service';

describe('TaxCalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxCalService]
    });
  });

  it('should be created', inject([TaxCalService], (service: TaxCalService) => {
    expect(service).toBeTruthy();
  }));
});
