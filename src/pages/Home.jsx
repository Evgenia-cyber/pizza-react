import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup } from '../components';
import PizzaBlock from '../components/PizzaBlock';
import PizzaLoadingBlock from '../components/PizzaLoadingBlock';
import {
  setActiveCategory,
  setActiveSortBy,
} from '../redux/reducers/filterReducer';
import { fetchPizzas } from '../redux/reducers/pizzasReducer';

function Home() {
  const dispatch = useDispatch();

  const { pizzas, isLoaded } = useSelector((state) => ({
    pizzas: state.pizzasReducer.pizzas,
    isLoaded: state.pizzasReducer.isLoaded,
  }));

  const { activeCategoryIndex, activeSortBy } = useSelector(
    ({ filterReducer }) => filterReducer,
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(activeCategoryIndex, activeSortBy));
  }, [activeCategoryIndex, activeSortBy, dispatch]);

  const onSelectedCategoryIndex = React.useCallback(
    (activeCategoryIndexFromUIClick) => {
      dispatch(setActiveCategory(activeCategoryIndexFromUIClick));
    },
    [dispatch],
  );
  const onSelectedFilter = React.useCallback(
    (activeFilterFromUIClick) => {
      dispatch(setActiveSortBy(activeFilterFromUIClick));
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
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeItem={activeCategoryIndex}
          onClickItem={onSelectedCategoryIndex}
          categories={categories}
        />
        <SortPopup
          onClickSortBy={onSelectedFilter}
          filters={filters}
          activeFilter={activeSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : Array.from(Array(10), (_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
}

export default Home;
