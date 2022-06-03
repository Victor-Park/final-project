import React from 'react';
import Catalogue from './pages/catalogue';
import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';
import Home from './pages/home';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    }, false);
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Catalogue />;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        <Home />
        {this.renderPage()}
      </>
    );
  }
}
