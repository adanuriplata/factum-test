import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context';
import styles from '../styles/modules/Header.module.scss';

export const Header = (): JSX.Element => {
  const { logOutUser } = useContext(AuthContext);
  return (
    <div className={styles.containerHeader}>
      <div className={styles.wrapperHeader}>
        <div className={styles.logo}>
          <p>Factum Test</p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/employees">
                <a>Employees</a>
              </Link>
            </li>
            <li>
              <Link href="/upload">
                <a>Upload</a>
              </Link>
            </li>
            <li>
              <span onClick={logOutUser}>LogOut</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
