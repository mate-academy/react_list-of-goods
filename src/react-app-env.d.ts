/// <reference types="react-scripts" />

enum SortingParams {
  index = 'index',
  abc = 'abc',
  length = 'length',
}

interface BasicState {
  goods: string[];
  isReversed: boolean;
  sortBy: SortingParams;
}

interface AdvancedState extends BasicState {
  wordLengths: number[];
  chosenLength: number;
}
