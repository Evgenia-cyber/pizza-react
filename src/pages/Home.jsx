import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup } from '../components';
import PizzaBlock from '../components/PizzaBlock';
import { setActiveCategory } from '../redux/reducers/filterReducer';

function Home() {
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => ({
    pizzas: state.pizzasReducer.pizzas,
  }));

  const onSelectedCategoryIndex = React.useCallback(
    (activeCategoryIndexFromUIClick) => {
      dispatch(setActiveCategory(activeCategoryIndexFromUIClick));
    },
    [dispatch],
  );

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const filters = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alfabet' },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectedCategoryIndex}
          categories={categories}
        />
        <SortPopup filters={filters} />
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
