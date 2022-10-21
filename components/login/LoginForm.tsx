import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../../context';
import styles from '../../styles/modules/Login.module.scss';

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
      alert(' 🛑 Wrong Password or User 🛑 ');
      return;
    }
    void router.replace('/employees');
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.form}>
        <h2>Factum Test</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="user">
              <input
                placeholder="nombre"
                className={styles.input}
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
          <div className={styles.group}>
            <label className={styles.label} htmlFor="pass">
              <input
                placeholder="password"
                className={styles.input}
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
          <div className={styles.group}>
            <button>Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
