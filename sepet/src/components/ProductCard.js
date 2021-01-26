import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, addToBasket }) => {
  const { name, longName, price, unit, description } = product;
  return (
    <div className='card mb-4 shadow-sm'>
      <div className='card-header'>
        <h4 className='my-0 fw-normal'>{name}</h4>
      </div>
      <div className='card-body'>
        <h1 className='card-title pricing-card-title'>
          {price}₺ <small className='text-muted'>/ {unit}</small>
        </h1>
        <ul className='list-unstyled mt-3 mb-4'>
          <li>{longName}</li>
          <li>{description}</li>
        </ul>
        <button type='button' className='w-100 btn btn-primary' onClick={() => addToBasket(product)}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export const productType = (ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    longName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  addToBasket: PropTypes.func.isRequired,
});

export default ProductCard;
