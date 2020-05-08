import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import { GoodsList } from './components/GoodsList';

export default class App extends Component {
  goodsFromServer = [
    'Dumplings',
    'Carrot',
    'Eggs',
    'Ice cream',
    'Apple',
    'Bread',
    'Fish',
    'Honey',
    'Jam',
    'Garlic',
  ]
  constructor(props) {
    super(props);
    this.state =  {
     goods: [...this.goodsFromServer],
  
      buttons: [
        {nameButton: 'Reset', id: 1},
        {nameButton: 'Sort alphabetically', id: 2},
        {nameButton: 'Reverse', id: 3},
        {nameButton: 'Sort by length', id: 4},
      ],
  
      isLoaded: false,
      isLoading: false,
      filter: 'normal',
      selectedButtonId: 1,
      lengthString: '100',
      del: 1,

    };

    // this.onChangeSelect = this.onChangeSelect.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeSelect = (event) => {
    this.setState({lengthString: event.target.value});
  };

  onSubmit = (event) => {
    alert(`Вы выбрали язык: ${this.state.lengthString}`);
    event.preventDefault();
  }

  handleClick = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        isLoading: false,
      });
    }, 1000);
    };

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
  filter (goods, id, lengthString) {
    
    let goodsNew = [...goods];

     switch(id) {
      case 1:
        return this.goodsFromServer.filter(good => good.length <= lengthString);
      case 2:
        return goodsNew.sort().filter(good => good.length <= lengthString);
      case 3:
        return goodsNew.reverse().filter(good => good.length <= lengthString);
      case 4:
        return goodsNew.sort((a, b) => a.length - b.length).filter(good => good.length <= lengthString);
      default:
        return goodsNew;
    }
  }

  deleteItem = (idx) => {
    this.setState({
      selectedButtonId: 0
        });
    this.setState(({goods}) => {
      const newArray = [...goods.slice(0, idx), ...goods.slice(idx + 1)];
      return {
        goods: newArray
      };
  });
}; 
  render() {
    const visibleItems = this.filter(this.state.goods, this.state.selectedButtonId, this.state.lengthString);
    const callback = (id) => {
      this.setState({
        selectedButtonId: id
      });
    }
    console.log('delete');
    return (
      <div className="App">
        { this.state.isLoaded ? (
          <>
          <h1>Goods{this.state.selectedButtonId}</h1>
          <ButtonList 
            buttons = {this.state.buttons}
            onButtonSelected = {callback}
          />
          <p/>
          <form onSubmit={this.onSubmit}>
              <label>
                Input lenth of goods:
                <p/>
                <select value={this.state.lengthString} onChange={this.onChangeSelect}>
                  <option value="1">1 символ</option>
                  <option value="2">2 символ</option>
                  <option value="3">3 символ</option>
                  <option value="4">4 символа</option>
                  <option value="5">5 символов</option>
                  <option value="6">6 символов</option>
                  <option value="7">7 символлов</option>
                  <option value="8">8 символов</option>
                  <option value="9">9 символов</option>
                  <option value="10">10 символов</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
            <p/>
          <GoodsList 
            onDeleted = {this.deleteItem}
            goods = {visibleItems}
            />
          </>) : (<button onClick={this.handleClick}>
            {this.state.isLoading ? 'Loading...' : 'Load'}
          </button>)}
          </div>
      );
    }
    }

    function ButtonList(props) {
      return (
        <div className="buttonList">
         {props.buttons.map(button => (
            <button key = {button.id}
              onClick={() => {
                props.onButtonSelected(button.id)
              }}>{button.nameButton}</button>))}
              
        </div>
      );}

     

