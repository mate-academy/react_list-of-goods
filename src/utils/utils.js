import { Mode } from './modes';

export const prepareGoodsList = (goods, mode, minGoodLength) => {
  switch (mode) {
    case Mode.REVERSE: {
      return goods
        .filter(good => good.length >= minGoodLength)
        .reverse();
    }

    case Mode.ALPHABET: {
      return goods
        .filter(good => good.length >= minGoodLength)
        .sort();
    }

    case Mode.LENGTH: {
      return goods
        .filter(good => good.length >= minGoodLength)
        .sort((goodA, goodB) => (goodA.length > goodB.length ? 1 : -1));
    }

    case Mode.DEFAULT: {
      return goods.filter(good => good.length >= minGoodLength);
    }

    default: {
      return goods;
    }
  }
};
