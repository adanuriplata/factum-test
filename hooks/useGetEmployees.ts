import { useState, useEffect } from 'react';
import { Employee } from '../types/Employee';

interface useGetEmployeesResponse {
  isLoading: boolean;
  employees: Employee[];
}

export const useGetEmployees = (): useGetEmployeesResponse => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCourses = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_HOST as unknown as URL
        );
        const data = await response.json();
        setEmployees(data.data.employees);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    getCourses().catch((error) => console.error('Error', { error }));
  }, [setEmployees]);

  return { isLoading, employees };
};
