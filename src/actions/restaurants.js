import api from '../services/api';

export const setRestaurants = (restaurants) => ({
  type: 'SET_RESTAURANTS',
  restaurants,
});

export const startSetRestaurants = () => {
  return async (dispatch) => {
    try {
      const restaurants = await api.get('/');
      console.log(restaurants.data);
      dispatch(setRestaurants(restaurants));
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearRestaurants = () => ({
  type: 'CLEAR_RESTAURANTS',
});
