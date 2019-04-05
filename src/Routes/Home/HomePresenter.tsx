import React from 'react';
import Product from 'src/Components/Product';

class HomePresenter extends React.Component<any, any, any> {
  public render() {
    return <Product category="onSale" data={this.props.data} />;
  }
}
export default HomePresenter;
