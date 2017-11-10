import { TestBed, inject } from '@angular/core/testing';

import { EsacToMidiService } from './esac-to-midi.service';

describe('EsacToMidiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsacToMidiService]
    });
  });

  it('should be created', inject([EsacToMidiService], (service: EsacToMidiService) => {
    expect(service).toBeTruthy();
  }));
});
