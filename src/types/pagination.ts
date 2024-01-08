type Pagination<T> = {
  items: T[];
  totalPages: number;
  count: number;
  hasNext: boolean;
  paginationToken: string;
}