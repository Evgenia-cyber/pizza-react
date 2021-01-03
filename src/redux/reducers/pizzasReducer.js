const SET_PIZZAS = 'pizzasReducer/SET_PIZZAS';

const initialState = {
  pizzas: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload };
    default:
      return state;
  }
};

export const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  payload: pizzas,
});

export default pizzasReducer;
