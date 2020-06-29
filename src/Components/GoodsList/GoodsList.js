import React from 'react';
import { GoodsSection } from '../GoodsSection/GoodsSection';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { ShapeGoodsList } from '../Shapes/ShapeGoodsList';

export class GoodsList extends React.PureComponent {
  render() {
    return (
      <>
        <div className="">
          <GoodsSection
            goods={this.props.goods}
          />
        </div>
        <div className="d-flex justify-content-between">
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
            defaultSelect={this.props.defaultSelect}
            quantity={10}
            onSelected={this.props.onSelected}
          />
        </div>
      </>
    );
  }
}

GoodsList.propTypes = ShapeGoodsList.isRequired;
