// pages/product.js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Product() {
  const router = useRouter();
  const { data } = router.query;
  const [product] = useState({
    name: 'Wine Name',
    price: 20,
    details: 'Some details about the wine.',
  });

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/cart');
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.details}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
