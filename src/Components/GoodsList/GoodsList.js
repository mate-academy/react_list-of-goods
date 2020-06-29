import React from 'react';
import { GoodsSection } from '../GoodsSection/GoodsSection';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

export class GoodsList extends React.PureComponent {
  render() {
    return (
      <>
        <div className="">
          <GoodsSection
            goods={this.props.goods}
          />
        </div>
        <div className="row">
          <Button
            title="Reverse"
            onClick={this.props.onSortedReverse}
          />
          <Button
            title="Sort ABC"
            onClick={this.props.onSortedAlphabet}
          />
          <Button
            title="Sort by length"
            onClick={this.props.onSortedLength}
          />
          <Button
            title="Reset"
            onClick={this.props.onReset}
          />
          <Select
            default={1}
            quantity={10}
            onSelected={this.props.onSelected}
            defaultSelect={this.props.defaultSelect}
          />
        </div>
      </>
    );
  }
}
