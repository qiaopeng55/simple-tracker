import getCardIndex from './get-card-index';

it('should get card index', () => {
  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const id = 2;

  expect(getCardIndex(cards, id)).toEqual(1);
});
