import { TestBed, inject } from '@angular/core/testing';

import { JonComponentsService } from './jon-components.service';

describe('JonComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JonComponentsService]
    });
  });

  it('should be created', inject([JonComponentsService], (service: JonComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
