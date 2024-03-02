import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/me'
          element={<ProfilePage />}
        />
        <Route
          path='/registration'
          element={<RegistrationPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}

export default App;
