const ADD_PIZZA_TO_CART = 'cartReducer/ADD_PIZZA_TO_CART';
const CLEAR_CART = 'cartReducer/CLEAR_CART';
const REMOVE_CART_ITEM = 'cartReducer/REMOVE_CART_ITEM';
const PLUS_ITEM = 'cartReducer/PLUS_ITEM';
const MINUS_ITEM = 'cartReducer/MINUS_ITEM';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (array) =>
  array.reduce((sum, pizza) => (sum += pizza.price), 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CART_ITEM: {
      const cartItems = { ...state.items };
      const currentTotalPrice = cartItems[action.payload].totalGroupPrice;
      const currentTotalCount = cartItems[action.payload].items.length;
      delete cartItems[action.payload];
      return {
        ...state,
        items: cartItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case CLEAR_CART:
      return { items: {}, totalPrice: 0, totalCount: 0 };

    // case ADD_PIZZA_TO_CART: {
    //   const currentPizzaItems = !state.items[action.payload.id]
    //     ? [action.payload]
    //     : [...state.items[action.payload.id].items, action.payload];
    //   const newItems = {
    //     ...state.items,
    //     [action.payload.id]: {
    //       items: currentPizzaItems,
    //       totalGroupPrice: getTotalPrice(currentPizzaItems),
    //     },
    //   };
    //   const items = Object.values(newItems).map((obj) => obj.items);
    //   const pizzasInCart = [].concat.apply([], items);
    //   return {
    //     ...state,
    //     items: newItems,
    //     totalCount: pizzasInCart.length,
    //     totalPrice: getTotalPrice(pizzasInCart),
    //   };
    // }
    //////////////////////////////////или
    case ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalGroupPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalGroupPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case PLUS_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalGroupPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalGroupPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case MINUS_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalGroupPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalGroupPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
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
export const clearCart = () => ({
  type: CLEAR_CART,
});
export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});
export const plusItem = (id) => ({
  type: PLUS_ITEM,
  payload: id,
});
export const minusItem = (id) => ({
  type: MINUS_ITEM,
  payload: id,
});

export default cartReducer;
