import styles from './Select.module.scss';

const Select = ({ id, required, options }: SelectProps) => {
  return (
    <select id={id} required={required} className={styles.select}>
      {options.map(([name, value]) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

interface SelectProps {
  id: string;
  required: boolean;
  options: [string, number][];
}

export default Select;
