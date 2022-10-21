import { GetServerSideProps } from 'next';
import { LoginForm } from '../components';

const login = (): JSX.Element => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token = '' } = req.cookies;
  const isValidToken = token === '675489';

  if (isValidToken) {
    return {
      redirect: {
        destination: '/employees',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default login;
