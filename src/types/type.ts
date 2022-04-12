export type Options = {
  value: number,
  label: string,
};

export type State = {
  goodList: string[] | [];
  isReversed: boolean;
  sort: boolean;
  sortByLength: boolean;
  choosedLength: number;
  hidden: boolean,
};

export type Props = {
  goods: string[] | [],
  isReversed: boolean,
  sorted: boolean,
  lengthSort: boolean,
  choosedLength: number,
};
