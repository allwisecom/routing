import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here are some great tools for React</h2>
      <ul>
        <ul />
        {products.map((product) => (
          <li key={product.id} className="text-center p-1 text-base text-slate-800">
            <Link to={`/products/${product.id}`}>{product.name}</Link>

            {/* <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
