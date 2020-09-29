import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import {
  setTextFilter,
  filterByBrand,
  filterByVariety,
  filterByStyle,
  filterByCountry,
  filterByStars,
} from '../actions/filters';

export default function SearchBar() {
  // const [searchTerm, setSearchTerm] = useState('');
  const [filterTypeDropdownOpen, setFilterTypeDropdownOpen] = useState(false);
  const [starsDropdownOpen, setStarsDropdownOpen] = useState(false);

  const toggleFilterTypeDropDown = () =>
    setFilterTypeDropdownOpen(!filterTypeDropdownOpen);
  const toggleStarsDropdown = () => setStarsDropdownOpen(!starsDropdownOpen);

  const filterTextChangeHandler = async (e) => {
    // setSearchTerm(e.target.value);
    dispatch(setTextFilter(e.target.value));
  };

  const filters = useSelector(state => state.filters);

  const dispatch = useDispatch();

  return (
    <div className="filter-panel">
      <ButtonDropdown
        isOpen={filterTypeDropdownOpen}
        toggle={toggleFilterTypeDropDown}
      >
        <Button id="caret" color="primary">
          { filters.searchBy }
        </Button>
        <DropdownToggle color="primary" caret />
        <DropdownMenu>
          <DropdownItem onClick={() => dispatch(filterByBrand())}>Brand</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByVariety())}>Variety</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByStyle())}>Style</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByCountry())}>Country</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <Input
        id="filter-text"
        placeholder="Filter Text"
        value={filters.text}
        onChange={(e) => filterTextChangeHandler(e)}
      />
      <ButtonDropdown isOpen={starsDropdownOpen} toggle={toggleStarsDropdown}>
        <Button id="caret" color="primary">
          Stars: {filters.stars}
        </Button>
        <DropdownToggle color="primary" caret />
        <DropdownMenu>
          <DropdownItem onClick={() => dispatch(filterByStars(1))}>1</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByStars(2))}>2</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByStars(3))}>3</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByStars(4))}>4</DropdownItem>
          <DropdownItem onClick={() => dispatch(filterByStars(5))}>5</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <Button color="primary">Top 10</Button>
    </div>
  );
}
