import React, { useState } from 'react';
import Basket from './components/Basket';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

const App = () => {
  const [basketItems, setbasketItems] = useState([]);

  const addToBasket = (product) => {
    const alreadyAdded = basketItems.find((item, i) => item.product.id === product.id);

    if (alreadyAdded) {
      setbasketItems((prev) =>
        prev.map((basketItem) =>
          basketItem.product.id === product.id ? { ...basketItem, count: basketItem.count + 1 } : basketItem
        )
      );
    } else {
      setbasketItems((prev) => [...prev, { product, count: 1 }]);
    }
  };

  const removeFromBasket = (productId) => {
    setbasketItems((prev) => prev.filter((basketItem) => basketItem.product.id !== productId));
  };

  return (
    <main className='container'>
      <div className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
        <h1 className='display-4'>Sepet Uygulaması</h1>
        <p className='lead'>
          Eklemek istediginiz urunleri sepete ekle butonu ile birden fazla ekleyebilirsiniz
        </p>
      </div>
      <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
        {products.map((product, index) => (
          <div key={product.id} className='col'>
            <ProductCard product={product} addToBasket={addToBasket} />
          </div>
        ))}
      </div>
      <div className='row d-flex justify-content-center'>
        <Basket basketItems={basketItems} removeItem={removeFromBasket} />
      </div>
    </main>
  );
};

export default App;
