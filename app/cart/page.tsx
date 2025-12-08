import { APP_BASE_URL } from '../constants';
import Cart from '../components/Cart';

const CartPage: React.FC = async () => {
  const response = await fetch(`${APP_BASE_URL}/api/users/2/cart`, { cache: 'no-store' });
  const cart = await response.json();

  return <Cart initialCart={cart} />;
};

export default CartPage;
