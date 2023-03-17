import React from 'react';

type Props = {
  good: string;
};

export class Good extends React.PureComponent<Props, {}> {
  render() {
    return <li data-cy="Good">{this.props.good}</li>;
  }
}
