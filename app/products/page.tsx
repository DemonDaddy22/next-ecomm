import Products from '../components/Products';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8'>
      <Products products={products} />
    </section>
  );
};

export default ProductsPage;
