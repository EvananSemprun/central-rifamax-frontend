import { Center, Pagination as Pagy } from "@mantine/core";

export interface Pagination {
  total: number;
  siblings: number;
  onClick?: () => void;
}

export const Pagination = ({ total, siblings, onClick}: Pagination) => {
  return (
    <Center>
      <Pagy
        total={total}
        siblings={siblings}
        onClick={onClick}
      />
    </Center>
  );
};