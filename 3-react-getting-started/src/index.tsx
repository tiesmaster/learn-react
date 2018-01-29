import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ChangeEvent } from 'react';

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

interface ProductEntity {
  name: string;
  price: string;
  stocked: boolean;
}

function ProductRow(props: { product: ProductEntity }) {
  const product = props.product;
  const name = product.stocked ?
    product.name : (
      <span style={{ color: 'red' }}>
        {product.name}
      </span>
    );
  return (
    <div>
      {name}
      <span>{product.price}</span>
    </div>
  );
}

function ProductTable(props: { products: ProductEntity[] }) {
  return (
    <div>
      <h1>Name Price</h1>
      <ul>
        {props.products.map((product) =>
          <ProductRow key={product.name} product={product} />
        )}
      </ul>
    </div>
  );
}

class App extends React.Component<{ products: ProductEntity[] }, { searchText: string, limitOnlyOnStock: boolean }> {
  constructor(props: { products: ProductEntity[] }) {
    super(props);
    this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    this.handleLimitOnlyOnStockChanged = this.handleLimitOnlyOnStockChanged.bind(this);
    this.state = { searchText: '', limitOnlyOnStock: false };
  }
  handleSearchTextChanged(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    this.setState({ searchText: newValue });
  }
  handleLimitOnlyOnStockChanged(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.checked;
    this.setState({ limitOnlyOnStock: newValue });
  }
  render() {
    let filteredProducts = this.props.products;

    const limitOnlyOnStock = this.state.limitOnlyOnStock;
    if (limitOnlyOnStock) {
      filteredProducts = filteredProducts.filter((product) => product.stocked);
    }

    const searchText = this.state.searchText.toUpperCase();
    if (searchText !== '') {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toUpperCase().indexOf(searchText) >= 0);
    }
    return (
      <div>
        <form>

          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchText}
            onChange={this.handleSearchTextChanged}
          />

          <input
            type="checkbox"
            checked={this.state.limitOnlyOnStock}
            onChange={this.handleLimitOnlyOnStockChanged}
          />

        </form>
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

ReactDOM.render(<App products={products} />, document.getElementById('root'));