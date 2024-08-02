import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Checkboxes from '../../../../components/ui/form/checkboxes/Checkboxes';

describe('Checkboxes component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders checkbox correctly with default state (unchecked)', () => {
    render(<Checkboxes options={mockOptions} selectedValues={[]} onChange={mockOnChange} />);
    const checkbox = screen.getByLabelText('Option 1');
    expect(checkbox).not.toBeChecked();
  });

  test('calls onChange handler with correct value when checkbox is toggled', () => {
    render(<Checkboxes options={mockOptions} selectedValues={[]} onChange={mockOnChange} />);
    const checkbox = screen.getByLabelText('Option 1');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(['option1']);
  });

  test('renders checkbox with correct label text', () => {
    render(<Checkboxes options={mockOptions} selectedValues={[]} onChange={mockOnChange} />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  test('renders all provided options', () => {
    render(<Checkboxes options={mockOptions} selectedValues={[]} onChange={mockOnChange} />);
    expect(screen.getAllByRole('checkbox')).toHaveLength(mockOptions.length);
  });

  test('correctly sets initial checked state based on selectedValues prop', () => {
    render(<Checkboxes options={mockOptions} selectedValues={['option1']} onChange={mockOnChange} />);
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });

  test('toggles checkbox off when clicked if already checked', () => {
    render(<Checkboxes options={mockOptions} selectedValues={['option1']} onChange={mockOnChange} />);
    const checkbox = screen.getByLabelText('Option 1');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  test('handles multiple selections correctly', () => {
    render(<Checkboxes options={mockOptions} selectedValues={['option1']} onChange={mockOnChange} />);
    const checkbox2 = screen.getByLabelText('Option 2');
    fireEvent.click(checkbox2);
    expect(mockOnChange).toHaveBeenCalledWith(['option1', 'option2']);
  });
});
