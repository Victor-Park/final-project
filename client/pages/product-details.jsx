import React from 'react';
import { toDollars } from '../lib';
import './product-details.css';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.productId}`)
      .then(res => res.json())
      .then(product => this.setState({ product }));
  }

  render() {
    if (!this.state.product) return null;
    const {
      name, description, price, imageUrl, brand, availability, imageUrl2, imageUrl3, imageUrl4
    } = this.state.product;
    return (
      <div className="container">
        <div /* className="" */>
          <div /* className="" */>
            <div className="row">
              <div className="col">
                <a href="#" className="btn text-secondary">
                  &lt; Homepage
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-5">
                <img src={imageUrl} alt={name} className="main-pic" />
              </div>
              <div className="col-12 col-sm-6 col-md-7 header">
                <h2>{name}</h2>
                <h5>Brand: {brand}</h5>
                <h5>Availability: {availability}</h5>
                <h5 className="price">Price: {toDollars(price)}</h5>
              </div>
              <div className="col-12 col-sm-6 col-md-5">
                <img src={imageUrl2} alt={name} className="extra-pic" />
                <img src={imageUrl3} alt={name} className="extra-pic" />
                <img src={imageUrl4} alt={name} className="extra-pic" />
              </div>
            </div>
            <div className="row">
              <div className="col description">
                <h3>Description</h3>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
