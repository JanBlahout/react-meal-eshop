import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  const cartCtx = useContext(CartContext);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          onAddToCart={addItemToCartHandler}
          id={props.id}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
