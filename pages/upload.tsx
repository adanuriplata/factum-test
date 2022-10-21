import { GetServerSideProps } from 'next';
import { Upload } from '../components';

const upload = (): JSX.Element => {
  return (
    <div>
      <Upload />
    </div>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token = '' } = req.cookies;
  const isValidToken = token === '675489';

  // try {
  //     await jwt.isValidToken( token );
  //     isValidToken = true;
  // } catch (error) {
  //     isValidToken = false;
  // }

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
