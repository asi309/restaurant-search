import React from 'react';
import { useSelector } from 'react-redux';

import getFilteredRestaurants from '../selectors/restaurantFilter';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = (props) => {
  const restaurants = useSelector((state) =>
    getFilteredRestaurants(state.restaurants, state.filters)
  );

  return (
    <div className="restaurant-list">
      {restaurants.length === 0 ? (
        <div className="list-item--message">
          <h3>No Restaurants match your search</h3>
        </div>
      ) : (
        restaurants.map((restaurant, idx) => {
          return <RestaurantListItem key={idx} {...restaurant} />;
        })
      )}
    </div>
  );
};

export default RestaurantList;
