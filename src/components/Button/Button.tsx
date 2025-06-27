import type { FC } from "react";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  props?: Record<string, any>;
  handleClick?: () => void;
};

export const ButtonComponent: FC<Props> = ({ children, handleClick }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {children}
    </button>
  );
};
