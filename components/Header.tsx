import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context';

export const Header = (): JSX.Element => {
  const { isLogged, logOutUser } = useContext(AuthContext);
  return (
    <div>
      <ul>
        {!isLogged ? (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <span onClick={logOutUser}>LogOut</span>
            </li>
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
          </>
        )}
      </ul>
    </div>
  );
};
