const Navbar: React.FC = () => {
  return (
    <nav className='w-full p-4 bg-teal-900 text-white flex justify-between items-center'>
      <div className='flex gap-4'>
        <a href='/products' className='hover:underline'>
          Home
        </a>
        <a href='/products' className='hover:underline'>
          Products
        </a>
        <a href='/cart' className='hover:underline'>
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
