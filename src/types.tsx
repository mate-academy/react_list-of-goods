export enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export type State = {
  isReversed: boolean,
  sortType: SortType,
};

export type Props = {};
