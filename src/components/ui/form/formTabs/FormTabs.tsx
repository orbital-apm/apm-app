import styles from './FormTabs.module.scss';
import FormTab from '@/components/ui/form/formTabs/formTab/FormTab';

const FormTabs = ({ tabs }: FormTabsProps) => {
  return (
    <div className={styles.formTabsContainer}>
      {tabs.map(([redirectPath, text, selected]) => (
        <FormTab key={text} redirectPath={redirectPath} text={text} selected={selected} />
      ))}
    </div>
  );
};

interface FormTabsProps {
  tabs: [string, string, boolean][];
}

export default FormTabs;
