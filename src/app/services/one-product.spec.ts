import { TestBed } from '@angular/core/testing';

import { OneProduct } from './one-product';

describe('OneProduct', () => {
  let service: OneProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
