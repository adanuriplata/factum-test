import { GetServerSideProps } from 'next';
import { EmployeesTable, FormEmployees, Loader } from '../components';
import { useGetEmployees } from '../hooks/useGetEmployees';
import styles from '../styles/modules/Employees.module.scss';

const Employees = (): JSX.Element => {
  const { isLoading, employees } = useGetEmployees();
  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        {isLoading ? <Loader /> : <EmployeesTable employees={employees} />}
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
