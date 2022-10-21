// import { useRouter } from 'next/router';
// import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { EmployeesTable, FormEmployees } from '../components';
import styles from '../styles/modules/Employees.module.scss';
// import { AuthContext } from '../context';

const Employees = (): JSX.Element => {
  // const router = useRouter();
  // const { isLogged } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <EmployeesTable />
      </div>
      <div className={styles.containerCard}>
        <FormEmployees />
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

export default Employees;
