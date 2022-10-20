import React, { ChangeEvent, useState } from 'react';
import { Search, Table } from '../../components';
import { employees } from '../../demoData/employeesDB';

export const EmployeesTable = (): JSX.Element => {
  const [queryTerm, setQueryTerm] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQueryTerm(e.target.value.toLowerCase());
  };

  const employeesToShow = employees.filter((e) => {
    if (queryTerm.length) {
      return (
        e.name.toLowerCase().includes(queryTerm) ||
        e.last_name.toLowerCase().includes(queryTerm) ||
        e.id.toString().includes(queryTerm)
      );
    }
    return e;
  });

  return (
    <>
      <Search handleChange={handleChange} />
      <Table Employees={employeesToShow} />
    </>
  );
};
