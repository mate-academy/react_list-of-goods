export interface Good {
  name: string;
  id:string;
}

export type State = {
  isListVisible: boolean;
  isReversed: boolean;
  sortBy: SortBy
};

export enum SortBy {
  length,
  alphabet,
  none,
}
