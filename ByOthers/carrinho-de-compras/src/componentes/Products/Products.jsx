import React, { useState , useEffect} from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products(){

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('celular').then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  return (
    <section className="products container">
    
      { 
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }

    </section>    
  );
}

export default Products;
