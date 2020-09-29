const getFilteredRestaurants = (restaurants, { text, searchBy, stars }) => {
  return restaurants.filter((restaurant) => {
    const starMatch = stars || restaurant['Stars'] === stars;
    const textMatch =
      text === '' ||
      restaurant[searchBy].toLowerCase().includes(text.toLowerCase());

    return textMatch && starMatch;
  });
};

export default getFilteredRestaurants;
