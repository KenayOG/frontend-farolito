import { TestBed } from '@angular/core/testing';

import { CatalogoComponentesService } from './catalogo-componentes.service';

describe('CatalogoComponentesService', () => {
  let service: CatalogoComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
