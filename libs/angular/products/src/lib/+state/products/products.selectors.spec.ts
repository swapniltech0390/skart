import { ProductsEntity } from './products.models';
import {
  productsAdapter,
  ProductsPartialState,
  initialProductsState,
} from './products.reducer';
import * as ProductsSelectors from './products.selectors';

describe('Products Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductsId = (it: ProductsEntity) => it.id;
  const createProductsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ProductsEntity);

  let state: ProductsPartialState;

  beforeEach(() => {
    state = {
      products: productsAdapter.setAll(
        [
          createProductsEntity('PRODUCT-AAA'),
          createProductsEntity('PRODUCT-BBB'),
          createProductsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialProductsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Products Selectors', () => {
    it('selectAllProducts() should return the list of Products', () => {
      const results = ProductsSelectors.selectAllProducts(state);
      const selId = getProductsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ProductsSelectors.selectEntity(state) as ProductsEntity;
      const selId = getProductsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectProductsLoaded() should return the current "loaded" status', () => {
      const result = ProductsSelectors.selectProductsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectProductsError() should return the current "error" state', () => {
      const result = ProductsSelectors.selectProductsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
