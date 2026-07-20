import { useMemo, useState } from "react";

export type Order = "asc" | "desc";

export default function useSort<T>(
  data: T[],
  initialField: keyof T
) {
  const [orderBy, setOrderBy] =
    useState<keyof T>(initialField);

  const [order, setOrder] =
    useState<Order>("asc");

  function handleSort(field: keyof T) {
    if (field === orderBy) {
      setOrder((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
      return;
    }

    setOrderBy(field);
    setOrder("asc");
  }

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const valueA = a[orderBy];
      const valueB = b[orderBy];

      if (valueA == null) return -1;
      if (valueB == null) return 1;

      if (valueA < valueB)
        return order === "asc" ? -1 : 1;

      if (valueA > valueB)
        return order === "asc" ? 1 : -1;

      return 0;
    });
  }, [data, order, orderBy]);

  return {
    sortedData,
    order,
    orderBy,
    handleSort,
  };
}