import swapArrayItems from './swap-array-items';

it('swapArrayItems', () => {
  const array = [1, 2, 3];

  const expectedArray = [3, 2, 1];

  expect(swapArrayItems(array, 0, 2)).toEqual(expectedArray);
});
