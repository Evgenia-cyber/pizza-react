import React from 'react';
import { Categories, SortPopup } from '../components';
import PizzaBlock from '../components/PizzaBlock';

function Home({ pizzas }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categories={[
            'Все',
            'Мясные',
            'Вегетарианские',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}
        />
        <SortPopup
          filters={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alfabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas &&
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
