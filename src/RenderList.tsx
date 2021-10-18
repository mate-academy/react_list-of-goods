import React from 'react';

interface Props {
  goods: string[]
}

export class RenderList extends React.Component<Props, {}> {
  state = {

  };

  render() {
    const { goods } = this.props;

    return (
      <div>
        <ul>
          {goods.map(good => {
            return (
              <li key={good}>{good}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
