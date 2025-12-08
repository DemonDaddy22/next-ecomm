import Products from '../components/Products';
import { APP_BASE_URL } from '../constants';

const ProductsPage: React.FC = async () => {
  const response = await fetch(`${APP_BASE_URL}/api/products`);
  const products = await response.json();

  const cartResponse = await fetch(`${APP_BASE_URL}/api/users/2/cart`, { cache: 'no-store' });
  const cart = await cartResponse.json();

  return (
    <section className='flex flex-col items-center justify-center gap-8'>
      <Products products={products} cart={cart} />
    </section>
  );
};

export default ProductsPage;
