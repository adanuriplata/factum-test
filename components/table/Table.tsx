import { FC, useEffect, useState } from 'react';
import { Employee } from '../../types/Employee';
import { paginator, transformDate } from '../../utils';
import { Pagination } from '../../components';
import styles from '../../styles/modules/Table.module.scss';

interface TableProps {
  Employees: Employee[];
}

export const Table: FC<TableProps> = ({ Employees }): JSX.Element => {
  const [currentPag, setCurrentPag] = useState(1);
  const [data, setData] = useState<Employee[]>([]);
  const totalPages = Math.ceil(Employees.length / 10);

  const handleNext = (): void => {
    currentPag < totalPages && setCurrentPag((currentPag) => currentPag + 1);
  };
  const handlePrev = (): void => {
    currentPag - 1 && setCurrentPag((currentPag) => currentPag - 1);
  };

  useEffect(() => {
    setData(paginator(Employees, currentPag, 10).data);
  }, [Employees, currentPag]);

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <th scope="row">{e.id}</th>
              <th>{e.last_name}</th>
              <th>{e.name}</th>
              <th>{transformDate(e.birthday)}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};
