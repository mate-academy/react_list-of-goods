/// <reference types="react-scripts" />

type State = {
  defaultGoods: string[];
  isShown: boolean;
  isReversed: boolean;
  sortBy: 'index' | 'length' | 'alphabet';
};

type AdvancedState = {
  defaultGoods: string[],
  visibleGoods: string[],
  isShown: boolean;
  isReversed: boolean;
  sortBy: 'index' | 'length' | 'alphabet';
  wordLengths: number[];
  chosenLength: number;
};
