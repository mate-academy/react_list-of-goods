/// <reference types="react-scripts" />

type BasicState = {
  goods: string[];
  isReversed: boolean;
  sortBy: '' | 'abc' | 'length';
};

type AdvancedState = {
  visibleGoods: string[],
  isReversed: boolean;
  wordLengths: number[];
  chosenLength: number;
  sortBy: '' | 'abc' | 'length';
};
