import { TestBed } from '@angular/core/testing';

import { InventarioLamparaService } from './inventario-lampara.service';

describe('InventarioLamparaService', () => {
  let service: InventarioLamparaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioLamparaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
