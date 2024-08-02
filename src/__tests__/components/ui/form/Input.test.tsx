import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../../components/ui/form/input/Input';

describe('Input component', () => {
  test('onChange handler is called when input value changes if onChange provided', () => {
    const mockOnChange = jest.fn();
    render(<Input id='test' type='text' placeholder='Test' required={false} onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText('Test');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('input value updates correctly when typed into if value prop provided', () => {
    const { rerender } = render(<Input id='test' type='text' placeholder='Test' required={false} value='Initial' />);

    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveValue('Initial');

    rerender(<Input id='test' type='text' placeholder='Test' required={false} value='Updated' />);
    expect(input).toHaveValue('Updated');
  });

  test('placeholder text is displayed when no value is present', () => {
    render(<Input id='test' type='text' placeholder='Test Placeholder' required={false} />);

    const input = screen.getByPlaceholderText('Test Placeholder');
    expect(input).toBeInTheDocument();
  });

  test('input is required when required prop is true', () => {
    render(<Input id='test' type='text' placeholder='Test' required={true} />);

    const input = screen.getByPlaceholderText('Test');
    expect(input).toBeRequired();
  });

  test('input is not required when required prop is false', () => {
    render(<Input id='test' type='text' placeholder='Test' required={false} />);

    const input = screen.getByPlaceholderText('Test');
    expect(input).not.toBeRequired();
  });

  test('input type is set correctly', () => {
    render(<Input id='test' type='password' placeholder='Test' required={false} />);

    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveAttribute('type', 'password');
  });

  test('price input formats value correctly', () => {
    render(<Input id='test' type='price' placeholder='Test' required={false} />);

    const input = screen.getByPlaceholderText('Test');
    fireEvent.change(input, { target: { value: '123.45' } });
    expect(input).toHaveValue('$123.45');

    fireEvent.change(input, { target: { value: '$123.456' } });
    expect(input).toHaveValue('$123.45');

    fireEvent.change(input, { target: { value: '$123.4.5' } });
    expect(input).toHaveValue('$123.4');

    fireEvent.change(input, { target: { value: 'abc123.45' } });
    expect(input).toHaveValue('$123.45');
  });

  test('input uses internal state when no value prop is provided', () => {
    render(<Input id='test' type='text' placeholder='Test' required={false} />);

    const input = screen.getByPlaceholderText('Test');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input).toHaveValue('New Value');
  });
});
