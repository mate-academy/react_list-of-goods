import React from 'react';

class Goods extends React.PureComponent {
    state = {
        goods: this.props.goods,
    };

    reverse = () => {
        let copyList = [...this.state.goods];
        this.setState({
            goods: copyList.reverse(),
        })
    };

    sortInAlphOrder = () => {
        const copyList = [...this.state.goods]
        this.setState({
            goods: copyList.sort((a, b) => a.localeCompare(b)),
        })
    };

    sortByWordLength = () => {
        const copyList = [...this.state.goods]
        this.setState({
            goods: copyList.sort((a, b) => b.length - a.length),
        })
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