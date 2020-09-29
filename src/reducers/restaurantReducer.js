const restaurantReducerDefaultState = [];

const restaurantReducer = (state = restaurantReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [...state, action.restaurant];
    case 'SET_RESTAURANTS':
      return action.restaurants;
    case 'CLEAR_RESTAURANTS':
      return restaurantReducerDefaultState;
    default:
      return state;
  }
};

export default restaurantReducer;
