import styles from "./custom.checkbox.module.css";
import { FC } from "react";

interface CProps {
  isChecked: boolean;
  onChange: () => void;
}

export const CustomCheckbox: FC<CProps> = ({ isChecked, onChange }) => {
  return (
    <input
      className={styles.custom_checkbox}
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
    ></input>
  );
};
export default CustomCheckbox;
