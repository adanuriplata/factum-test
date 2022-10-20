import { employees } from '../demoData/employeesDB';
import { transformDate } from '../utils/';

export const EmployeesTable = (): JSX.Element => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <th scope="row">{e.id}</th>
              <th>{e.name}</th>
              <th>{e.last_name}</th>
              <th>{transformDate(e.birthday)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
