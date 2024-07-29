import { TestBed } from '@angular/core/testing';

import { InventarioComponenteService } from './inventario-componente.service';

describe('InventarioComponenteService', () => {
  let service: InventarioComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
