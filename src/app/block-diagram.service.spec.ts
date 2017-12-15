import { TestBed, inject } from '@angular/core/testing';

import { BlockDiagramService } from './block-diagram.service';

describe('BlockDiagramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockDiagramService]
    });
  });

  it('should be created', inject([BlockDiagramService], (service: BlockDiagramService) => {
    expect(service).toBeTruthy();
  }));
});
