import styles from "./input.module.css";
import { FC } from "react";

interface IProps {
  value?: string;
  onChange: (value: string) => void;
}

export const Input: FC<IProps> = ({ onChange, value }) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <input
      placeholder="Set text"
      className={styles.input}
      value={value}
      type="text"
      onChange={handleChange}
    />
  );
};
export default Input;
