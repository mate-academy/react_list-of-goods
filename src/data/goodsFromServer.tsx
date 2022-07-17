import { v4 as uuidv4 } from 'uuid';
import { Product } from '../components/GoodList';

export const goodsFromServer: Product[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
].map(good => ({
  id: uuidv4(),
  value: good,
}));
