import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate('/login');
  };
  return (
    <button
      onClick={handleLogout}
      className='icon-btn'
    >
      <img
        src='./assets/icons/logout.svg'
        alt='Logout'
      />
    </button>
  );
}
