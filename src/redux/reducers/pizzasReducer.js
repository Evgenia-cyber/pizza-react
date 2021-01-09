import axios from 'axios';

const SET_PIZZAS = 'pizzasReducer/SET_PIZZAS';
const IS_LOADING = 'pizzasReducer/IS_LOADING';

const initialState = {
  pizzas: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload, isLoaded: true };
    case IS_LOADING:
      return { ...state, isLoaded: action.payload };
    default:
      return state;
  }
};

export const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  payload: pizzas,
});
export const isLoading = (bool) => ({
  type: IS_LOADING,
  payload: bool,
});

export const fetchPizzas = (activeCategory, activeFilter) => (dispatch) => {
  dispatch(isLoading(true));
  axios
    .get(
      `/pizzas?${
        activeCategory === 0 ? '' : `category=${activeCategory}`
      }&_sort=${activeFilter}&_order=asc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
  dispatch(isLoading(false));
};

export default pizzasReducer;
