import React from 'react';

const RestaurantListItem = ({ Brand, Variety, Style, Country, Stars }) => (
  <div>
    <h3>{ Brand }</h3>
    <strong>Variety</strong>: <span>{Variety}</span>
    <strong>Style</strong>: <span>{ Style }</span>
    <strong>Country</strong>: <span>{ Country }</span>
    <strong>Stars</strong>: <span>{ Stars } / 5</span>
  </div>
);

export default RestaurantListItem;