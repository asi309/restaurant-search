const filterReducerDefaultState = {
  text: '',
  searchBy: 'Brand',
  stars: null,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'FILTER_BY_BRAND':
      return {
        ...state,
        searchBy: 'Brand',
      };
    case 'FILTER_BY_VARIETY':
      return {
        ...state,
        searchBy: 'Variety',
      };
    case 'FILTER_BY_STYLE':
      return {
        ...state,
        searchBy: 'Style',
      };
    case 'FILTER_BY_COUNTRY':
      return {
        ...state,
        searchBy: 'Country',
      };
    case 'FILTER_BY_STARS':
      return {
        ...state,
        searchBy: 'Stars',
        stars: action.stars,
      };
    case 'FILTER_BY_RATING':
      return {
        ...state,
        searchBy: 'rating',
      };
    default:
      return state;
  }
};

export default filterReducer;

//searchBy --> brand || variety || style || country || stars || rating
