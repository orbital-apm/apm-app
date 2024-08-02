import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../../../components/ui/form/button/Button';

describe('Button component', () => {
  test('renders correctly with provided text', () => {
    render(<Button type='button' text='Click me' />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked if onClick prop provided', () => {
    const mockOnClick = jest.fn();
    render(<Button type='button' text='Click me' onClickFn={mockOnClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('renders with correct button type', () => {
    render(<Button type='submit' text='Submit' />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('applies correct CSS class', () => {
    render(<Button type='button' text='Click me' />);
    expect(screen.getByRole('button')).toHaveClass('button');
  });

  test('does not throw error if onClick is not provided', () => {
    expect(() => {
      render(<Button type='button' text='Click me' />);
      fireEvent.click(screen.getByText('Click me'));
    }).not.toThrow();
  });

  test('renders with different button types', () => {
    const { rerender } = render(<Button type='button' text='Normal' />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');

    rerender(<Button type='submit' text='Submit' />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');

    rerender(<Button type='reset' text='Reset' />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
  });

  test('renders with undefined type', () => {
    render(<Button type={undefined} text='Undefined Type' />);
    expect(screen.getByRole('button')).not.toHaveAttribute('type');
  });
});
