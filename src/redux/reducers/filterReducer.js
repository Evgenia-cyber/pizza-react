const SET_ACTIVE_SORT_BY = 'filterReducer/SET_ACTIVE_SORT_BY';
const SET_ACTIVE_CATEGORY = 'filterReducer/SET_ACTIVE_CATEGORY';

const initialState = {
  activeCategoryIndex: 0,
  activeSortBy: 'rating',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SORT_BY:
      return { ...state, activeSortBy: action.payload };
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategoryIndex: action.payload };
    default:
      return state;
  }
};

export const setActiveSortBy = (name) => ({
  type: SET_ACTIVE_SORT_BY,
  payload: name,
});
export const setActiveCategory = (index) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: index,
});

export default filterReducer;
