import { GetServerSideProps } from 'next';
import { Upload } from '../components';

const upload = (): JSX.Element => {
  return (
    <div>
      <Upload />
    </div>
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
    props: {},
  };
};

export default upload;
