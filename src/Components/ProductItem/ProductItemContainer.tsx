import React from 'react';
import ProductItemPresenter from './ProductItemPresenter';
import { Mutation, Query } from 'react-apollo';
import { ADD_CART, REMOVE_CART } from '../Product/ProductQueries';
import { CART_QUERY } from 'src/Routes/Cart/CartQueries';

class ProductItemContainer extends React.Component<any, any, any> {
  public render() {
    const Productdata = this.props.data;
    console.log('프로덕트아이템데이터');
    console.log(Productdata);
    console.log(this.props);
    const product = Productdata;

    return (
      <Query query={CART_QUERY}>
        {({ loading, error, data }) => (
          <Mutation mutation={ADD_CART} variables={{ product }}>
            {addCart => (
              <Mutation mutation={REMOVE_CART} variables={{ product }}>
                {removeCart => (
                  <ProductItemPresenter
                    key={Productdata.name}
                    id={Productdata.productId}
                    name={Productdata.name}
                    price={Productdata.price}
                    photoUrl={Productdata.photo}
                    addCart={addCart}
                    removeCart={removeCart}
                    cart={data.cart}
                  />
                )}
              </Mutation>
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}
export default ProductItemContainer;
