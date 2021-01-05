import axios from 'axios';

const SET_PIZZAS = 'pizzasReducer/SET_PIZZAS';

const initialState = {
  pizzas: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload, isLoaded: true };
    default:
      return state;
  }
};

export const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  payload: pizzas,
});

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export default pizzasReducer;
