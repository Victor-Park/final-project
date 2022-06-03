import React from 'react';
import { toDollars } from '../lib';

const styles = {
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'contain'
  },
  description: {
    whiteSpace: 'pre-wrap'
  }
};

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(product => this.setState({ product }));
  }

  render() {
    if (!this.state.product) return null;
    const {
      /* productId, */ name, description, /* categoryId,  */price, imageUrl/* , brand, availability */
    } = this.state.product;
    return (
      <div className="container">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <a href="#" className="btn text-secondary">
                  &lt; Back to homepage
                </a>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12 col-sm-6 col-md-5">
                <img src={imageUrl} alt={name} style={styles.image} />
              </div>
              <div className="col-12 col-sm-6 col-md-7">
                <h2>{name}</h2>
                <h5 className="text-secondary">{toDollars(price)}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p style={styles.description}>
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
