import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/animals">Animals</Link>
        <Link to="/sam">Sam</Link>
        <Link to="/redirect">Redirect</Link>
        <Link to="/hank">Hank</Link>
        <Link to="/">Root</ Link>
      </nav>
    );
  }
}
