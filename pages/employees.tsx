import { EmployeesTable, FormEmployees } from '../components';

const employees = (): JSX.Element => {
  return (
    <div>
      <EmployeesTable />
      <FormEmployees />
    </div>
  );
};

export default employees;
