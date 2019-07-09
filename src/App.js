import React, { Component } from 'react'
import goods from './api/goods'
import './App.css'

export default class App extends Component {
  state = {
    isLoaded: false,
    goods: [],
    currentGoods: [],
    direction: 1,
    selectValue: 1,
  }

  handleLoad = () => {
    this.setState({
      goods,
      currentGoods: goods,
      isLoaded: true,
    })
  }

  handleReset = () => {
    this.setState(state => ({
      currentGoods: state.goods,
      selectValue: 1,
    }))
  }

  handleReverse = () => {
    this.setState(state => ({
      currentGoods: [...state.currentGoods].reverse(),
    }))
  }

  handleSortAlphabet = () => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      currentGoods: [...state.currentGoods].sort((a, b) => (
        a.localeCompare(b) * state.direction
      )),
    }))
  }

  handleSortLength = () => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      currentGoods: [...state.currentGoods].sort((a, b) => (
        (a.length - b.length) * state.direction
      )),
    }))
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState(state => ({
      selectValue: value,
      currentGoods: state.goods.filter(good => good.length >= value),
    }))
  }

  render() {
    return (
      <section className="container">
        {
          !this.state.isLoaded
            ? (
              <button
                type="button"
                className="btn"
                onClick={this.handleLoad}
              >
                  Load
              </button>
            ) : (
              <section>
                <button
                  type="button"
                  className="btn"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={this.handleReverse}
                >
                  Reverse the array
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={this.handleSortAlphabet}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={this.handleSortLength}
                >
                  Sort by length
                </button>
                <select
                  className="select-item"
                  onChange={this.handleChange}
                  value={this.state.selectValue}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <ul className="list">
                  {
                    this.state.currentGoods.map(good => (
                      <li className="list-item">{good}</li>
                    ))
                  }
                </ul>
              </section>
            )
        }
      </section>
    )
  }
}
