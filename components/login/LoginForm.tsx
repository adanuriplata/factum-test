import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../../context';

export const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const { loginUser } = useContext(AuthContext);
  const [data, setData] = useState({
    user: '',
    pass: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const keyProp = e.target.name;
    const value = e.target.value;
    console.log(keyProp);
    switch (keyProp) {
      case 'user':
        setData({ ...data, user: value });
        break;
      case 'pass':
        setData({ ...data, pass: value });
        break;
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const isValidUser = loginUser(data.user, data.pass);
    if (!isValidUser) {
      alert('error');
      return;
    }
    void router.replace('/employees');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">
          Usuario:
          <input
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            type="text"
            name="user"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pass">
          Password:
          <input
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            type="password"
            name="pass"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
};
