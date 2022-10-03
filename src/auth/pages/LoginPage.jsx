import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const hadlenLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Oscar Espinoza');

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={hadlenLogin}>
        Login
      </button>
    </div>
  );
};
