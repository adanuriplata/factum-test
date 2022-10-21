import { Employee } from '../types/Employee';

interface paginatorReturn {
  page: number;
  perPage: number;
  pre_page: number | null;
  next_page: number | null;
  total: number;
  totalPages: number;
  data: Employee[];
}

export const paginator = (
  items: Employee[],
  currentPage: number,
  perPageItems: number
): paginatorReturn => {
  const page = currentPage || 1;
  const perPage = perPageItems || 10;
  const offset = (page - 1) * perPage;
  const paginatedItems = items.slice(offset).slice(0, perPageItems);
  const totalPages = Math.ceil(items.length / perPage);

  return {
    page,
    perPage,
    pre_page: page - 1 ? page - 1 : null,
    next_page: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages,
    data: paginatedItems,
  };
};
