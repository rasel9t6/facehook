import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
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
