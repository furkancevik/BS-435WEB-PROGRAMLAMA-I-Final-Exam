import React from 'react';

const Basket = ({ basketItems = [], removeItem }) => {
  return (
    <div className='col-md-6 col-lg-8 order-md-last'>
      <h4 className='d-flex justify-content-between align-items-center mb-3'>
        <span className='text-muted'>Sepet</span>
        <span className='badge bg-secondary rounded-pill'>{basketItems.length}</span>
      </h4>
      <ul className='list-group mb-3'>
        {basketItems.map((basketItem, index) => {
          const { name, price, description, unit } = basketItem.product;
          return (
            <li className='list-group-item d-flex justify-content-between lh-sm'>
              <div>
                <h6 className='my-0'>
                  {name} ({basketItem.count} {unit})
                </h6>
                <small className='text-muted'>{description}</small>
              </div>
              <span className='text-muted'>{price * basketItem.count}₺</span>
              <button onClick={() => removeItem(basketItem.product.id)}>X</button>
            </li>
          );
        })}
        {basketItems.length !== 0 && (
          <li className='list-group-item d-flex justify-content-between bg-light'>
            <div className='text-success'>
              <h6 className='my-0'>Indirim Kupon Kodu</h6>
              <small>ornekkod</small>
            </div>
            <span className='text-success'>0₺</span>
          </li>
        )}
        <li className='list-group-item d-flex justify-content-between'>
          <span>Total (₺)</span>
          <strong>
            {basketItems.reduce((total, item) => {
              return total + item.product.price * item.count;
            }, 0)}
            ₺
          </strong>
        </li>
      </ul>
      <form className='card p-2'>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Indirim Kuponu Kodu' />
          <button type='submit' className='btn btn-secondary'>
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Basket;
