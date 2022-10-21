import { GetServerSideProps } from 'next';
import { Upload } from '../components';
import styles from '../styles/modules/Employees.module.scss';

const upload = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <h3>Upload File</h3>
        <Upload />
      </div>
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
