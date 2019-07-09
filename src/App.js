/* eslint-disable react/no-unused-state */

import React, { Component } from 'react'
import goods from './api/goods'
import './App.css'
import GoodsList from './components/GoodsList'

export default class App extends Component {
  state = {
    isLoaded: false,
    goods: [],
    currentGoods: [],
    direction: true,
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

  handleSort = (key) => {
    const callback = {
      alphabet: (a, b) => a.localeCompare(b),
      length: (a, b) => a.length - b.length,
    }

    const sortFunction = (items, direction) => {
      const currentGoods = direction
        ? [...items].sort(callback[key])
        : [...items].sort(callback[key]).reverse()
      return currentGoods
    }

    this.setState(state => ({
      direction: !state.direction,
      currentGoods: sortFunction(state.currentGoods, state.direction),
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
              <GoodsList
                state={this.state}
                handleReset={this.handleReset}
                handleReverse={this.handleReverse}
                handleChange={this.handleChange}
                handleSort={this.handleSort}
              />
            )
        }
      </section>
    )
  }
}
