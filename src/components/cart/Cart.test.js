import { getProductPrice } from './Cart';

test('getProductPrice', () => {
    const value = getProductPrice(2,3);
    expect(value).toBe(6);
});