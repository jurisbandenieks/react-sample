import { ButtonComponent, GridComponent } from "@/components";
import { useRefreshUsers, useUsers } from "@/hooks";
import type { UserModel } from "@/types";
import styles from "./Dashboard.module.css";

const columns: { headerName: string; field: keyof UserModel }[] = [
  { headerName: "ID", field: "id" },
  { headerName: "Name", field: "name" },
  { headerName: "Email", field: "email" },
];

export const Dashboard = () => {
  const { data, isLoading, error } = useUsers();

  const refreshUsers = useRefreshUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className={styles.dashboardContainer}>
      <ButtonComponent handleClick={refreshUsers}>Click Me</ButtonComponent>
      <div className="divider" />
      <GridComponent data={data} columns={columns} />
    </div>
  );
};
