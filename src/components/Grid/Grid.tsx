import { colorSchemeDark, themeBalham } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import type { FC } from "react";
import type { UserModel } from "@/types";
import styles from "./Grid.module.css";

export const GridComponent: FC<{ data: UserModel[]; columns: any }> = ({
  data,
  columns,
}) => {
  const myTheme = themeBalham.withPart(colorSchemeDark);

  return (
    <div className={styles.gridContainer}>
      <AgGridReact theme={myTheme} rowData={data} columnDefs={columns} />
    </div>
  );
};
