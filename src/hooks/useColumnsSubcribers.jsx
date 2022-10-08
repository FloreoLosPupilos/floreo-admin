import { useMemo } from "react";

export const useColumnsSubcribers = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  return columns;
}
