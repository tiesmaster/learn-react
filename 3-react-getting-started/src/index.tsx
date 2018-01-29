import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

function ProductNameWithStatus(props: { isOnStock: boolean; name: string }) {
  const isOnStock = props.isOnStock;
  if (isOnStock) {
    return <span className="isOnStock">{props.name}</span>;
  } else {
    return <span>{props.name}</span>;
  }
}

function Product(props: { product: { name: string; price: string; stocked: boolean } }) {
  const product = props.product;
  return (
    <div>
      <ProductNameWithStatus name={product.name} isOnStock={product.stocked} />
      <span>{product.price}</span>
    </div>
  );
}

function ProductTable(props: { products: { name: string; price: string; stocked: boolean }[] }) {
  return (
    <div>
      <h1>Name Price</h1>
      <ul>
        {props.products.map((product) =>
          <Product key={product.name} product={product} />
        )}
      </ul>
    </div>
  );
}

ReactDOM.render(<ProductTable products={products} />, document.getElementById('root'));