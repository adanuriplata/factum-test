import Link from 'next/link';

export const Header = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
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
      </ul>
    </div>
  );
};
