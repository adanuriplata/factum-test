// import { useRouter } from 'next/router';
// import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { EmployeesTable, FormEmployees } from '../components';
// import { AuthContext } from '../context';

const Employees = (): JSX.Element => {
  // const router = useRouter();
  // const { isLogged } = useContext(AuthContext);

  return (
    <div>
      <EmployeesTable />
      <FormEmployees />
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

export default Employees;
