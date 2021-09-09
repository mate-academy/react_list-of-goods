/// <reference types="react-scripts" />

interface BasicState {
  goods: string[];
  isReversed: boolean;
  sortBy: '' | 'abc' | 'length';
}

interface AdvancedState extends BasicState {
  wordLengths: number[];
  chosenLength: number;
}
