import { NavLink } from 'react-router-dom';
const MainPage = () => (
  <ul>
    <li>
      <NavLink to="/homework1">homework1</NavLink>
    </li>
    <li>
      <NavLink to="/homework2/fonebook">homework2 fonebook</NavLink>
    </li>
    <li>
      <NavLink to="/homework2/feedback">homework2 feedback</NavLink>
    </li>
  </ul>
);

export default MainPage;
