import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';
const Home = () => {
  return (
    <div>
      <StyledNavbar />
      <Outlet />
    </div>
  );
};
export default Home;
