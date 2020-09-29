import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <h2>Top Ramen Search</h2>
          </Link>
        </li>
      </ul>
    </header>
  );
}
