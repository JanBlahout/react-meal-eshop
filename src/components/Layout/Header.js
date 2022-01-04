import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from '../UI/HeaderCartButton';

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClickShowCart={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table with food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
