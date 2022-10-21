import { GetServerSideProps } from 'next';

const Custom404 = (): JSX.Element => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token = '' } = req.cookies;
  const isValidToken = token === '675489';

  if (!isValidToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: '/employees',
      permanent: false,
    },
  };
};

export default Custom404;
