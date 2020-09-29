export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

export const filterByBrand = () => ({
  type: 'FILTER_BY_BRAND',
});

export const filterByVariety = () => ({
  type: 'FILTER_BY_VARIETY',
});

export const filterByStyle = () => ({
  type: 'FILTER_BY_STYLE',
});

export const filterByCountry = () => ({
  type: 'FILTER_BY_COUNTRY',
});

export const filterByStars = (stars) => ({
  type: 'FILTER_BY_STARS',
  stars,
});

export const filterByRating = () => ({
  type: 'FILTER_BY_RATING',
  number: 10,
});
