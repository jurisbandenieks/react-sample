import { colorSchemeDark, themeBalham } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, type FC } from "react";
import type { UserModel } from "@/types";
import styles from "./Grid.module.css";

export const GridComponent: FC<{ data: UserModel[]; columns: any }> = ({
  data,
  columns,
}) => {
  const myTheme = themeBalham.withPart(colorSchemeDark);

  const rowClassRules = useMemo(() => {
    return {
      // apply red to Ford cars
      [styles.ragRed]: (params: any) => {
        return (params.data.name as string).startsWith("K");
      },
    };
  }, []);

  return (
    <div className={styles.gridContainer}>
      <AgGridReact
        theme={myTheme}
        rowData={data}
        columnDefs={columns}
        rowClassRules={rowClassRules}
      />
    </div>
  );
};
