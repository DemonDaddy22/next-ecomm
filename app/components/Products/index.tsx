import Product from '../Product';

type Props = {
  products: Array<Product>;
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <section className='max-w-5xl grid grid-cols-3 gap-4'>
      {products?.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
