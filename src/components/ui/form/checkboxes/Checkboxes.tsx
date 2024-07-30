import styles from './Checkboxes.module.scss';

const Checkboxes = ({ options, selectedValues, onChange }: CheckboxesProps) => {
  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(item => item !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className={styles.checkboxesContainer}>
      {options.map(option => (
        <label key={option.value} className={styles.checkboxContainer}>
          <input
            type='checkbox'
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

interface Option {
  value: string;
  label: string;
}

interface CheckboxesProps {
  options: Option[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

export default Checkboxes;
