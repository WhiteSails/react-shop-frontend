import { getProductPrice } from './cart';
// import {shallow} from "enzyme/build";

test('getProductPrice', () => {
    const value = getProductPrice(2,3);
    expect(value).toBe(6);
});