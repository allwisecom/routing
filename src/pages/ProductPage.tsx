import { useParams } from 'react-router-dom';
import { products } from '../data/products';

type ProductPageParams = {
  productId: string;
};

export function ProductPage() {
  const params = useParams<ProductPageParams>();

  const productId = params.productId === undefined ? undefined : parseInt(params.productId);

  const product = products.find((p) => p.id === Number(productId));

  return (
    <div>
      {product === undefined ? (
        <p>Product not found</p>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
