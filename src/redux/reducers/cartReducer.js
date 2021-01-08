const ADD_PIZZA_TO_CART = 'cartReducer/ADD_PIZZA_TO_CART';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const pizzasInCart = [].concat.apply([], Object.values(newItems));
      return {
        ...state,
        items: newItems,
        totalCount: pizzasInCart.length,
        totalPrice: pizzasInCart.reduce(
          (sum, pizza) => (sum += pizza.price),
          0,
        ),
      };
    }
    default:
      return state;
  }
};

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObj,
});

export default cartReducer;
