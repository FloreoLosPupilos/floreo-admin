import { useMemo } from "react";

export const useColumnsSubcribers = () => {
  const columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Username",
        accessor: "username",
      },
    ],
    []
  );

  return columns;
}
