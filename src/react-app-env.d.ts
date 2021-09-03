/// <reference types="react-scripts" />

type State = {
  defaultGoods: string[];
  isShown: boolean;
  isReversed: boolean;
  sortBy: string;
};

type AdvancedState = {
  isShown: boolean;
  isReversed: boolean;
  sortBy: string;
  wordLength: number;
  visibleGoods: string[];
};
