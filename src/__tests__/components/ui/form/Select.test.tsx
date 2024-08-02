import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../../../../components/ui/form/select/Select';

describe('Select component', () => {
  const options: [string, number][] = [
    ['Option 1', 1],
    ['Option 2', 2],
    ['Option 3', 3]
  ];

  test('all provided options are rendered correctly', () => {
    render(<Select id='test-select' required={false} options={options} />);

    options.forEach(([name, value]) => {
      const option = screen.getByRole('option', { name: name });
      expect(option).toBeInTheDocument();
      expect(option).toHaveValue(value.toString());
    });
  });

  test('select is required when required prop is true', () => {
    render(<Select id='test-select' required={true} options={options} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
  });

  test('select is not required when required prop is false', () => {
    render(<Select id='test-select' required={false} options={options} />);

    const select = screen.getByRole('combobox');
    expect(select).not.toBeRequired();
  });

  test('select has correct id', () => {
    render(<Select id='test-select' required={false} options={options} />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('id', 'test-select');
  });

  test('first option is selected by default', () => {
    render(<Select id='test-select' required={false} options={options} />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveValue(options[0][1].toString());
  });
});
