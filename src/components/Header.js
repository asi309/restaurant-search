import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <h2>Top Ramen Search</h2>
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </header>
  );
}
