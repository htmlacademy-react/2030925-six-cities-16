import { CardType } from '../types/card-type';

type CardsByCityProps = {
    [key: string]: CardType[];
}

export const getCardsByCity = (cards: CardType[]) => {
  const cardsByCity: CardsByCityProps = {};

  for (const card of cards) {
    if (!cardsByCity[card.city.name]) {
      cardsByCity[card.city.name] = [];
    }
    cardsByCity[card.city.name].push(card);
  }
  return cardsByCity;
};
