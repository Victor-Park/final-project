import React from 'react';
import Catalogue from './pages/catalogue';
import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';
import Slider from './components/slider/slider';
import Dropdown1 from './components/dropdown/dropdown';
import Navbar from './components/navbar/navbar';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener(
      'hashchange',
      () => {
        this.setState({ route: parseRoute(window.location.hash) });
      },
      false
    );
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return (
        <>
          <Navbar />
          <Dropdown1 />
          <Slider />
          <Catalogue />
        </>
      );
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }

  render() {
    return <>{this.renderPage()}</>;
  }
}
