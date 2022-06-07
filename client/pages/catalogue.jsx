import React from 'react';
import { toDollars } from '../lib';
import './catalogue.css';

export default class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="catalogue-container">
        <div className="catalogue-row">
          {this.state.products.map(product => (
            <div key={product.productId} className="col-fourth">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function Product(props) {
  const { productId, name, price, imageUrl } = props.product;
  return (
    <a href={`#products?productId=${productId}`} className="inline-block">
      <img src={imageUrl} className="full-width" alt={name} />
      <div className="product-name">
        <h5 className="product-name">{name}</h5>
        <p className="product-name">{toDollars(price)}</p>
      </div>
    </a>
  );
}
