import React from 'react';
import './GoodList.scss';

type Props = {
  goods: string[];
};

type State = {
  showList: boolean;
};

export class GoodList extends React.Component<Props, State> {
  state = {
    showList: false,
  };

  handleStart = () => {
    this.setState({ showList: true });
  };

  render() {
    return (
      <div className="goods">
        {this.state.showList ? (
          <ul className="goods__list">
            {this.props.goods.map((good, index) => {
              const id = index + 1;

              return (
                <li className="button is-light" key={id}>
                  {good}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="button__container">
            <button
              type="button"
              className="button-start"
              onClick={this.handleStart}
            >
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}
