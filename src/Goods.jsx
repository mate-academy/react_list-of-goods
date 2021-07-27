import React from 'react';

class Goods extends React.PureComponent {
    state = {
        goods: this.props.goods,
    };

    reverse = () => {
        this.setState(state => ({
            goods: [...state.goods].reverse(),
        }))
    };

    sortInAlphOrder = () => {
        this.setState(state => ({
            goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
        }))
    };

    sortByWordLength = () => {
        this.setState(state => ({
            goods: [...state.goods].sort((a, b) => b.length - a.length),
        }))
    };

    reset = () => {
        this.setState({
            goods: this.props.goods,
        })
    };

    render () {
        const { goods } = this.state;
        return (
            <>
                {goods.map(
                    good => <li key={good}>{good}</li>
                )}
                <button onClick={this.reverse} type='button'>
                    Reverse
                </button>
                <button onClick={this.sortInAlphOrder} type='button'>
                    Sort in alphabetic order
                </button>
                <button onClick={this.sortByWordLength} type='button'>
                    Sort by word length
                </button>
                <button onClick={this.reset} type='button'>
                    Reset
                </button>
            </>
        )
    };
};

export default Goods;