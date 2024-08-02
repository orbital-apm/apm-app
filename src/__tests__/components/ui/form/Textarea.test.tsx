import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from '../../../../components/ui/form/textarea/Textarea';

describe('Textarea component', () => {
  test('placeholder text is displayed when no value is present', () => {
    render(<Textarea id='test' rows={3} placeholder='Test Placeholder' required={false} />);

    const textarea = screen.getByPlaceholderText('Test Placeholder');
    expect(textarea).toBeInTheDocument();
  });

  test('textarea is required when required prop is true', () => {
    render(<Textarea id='test' rows={3} placeholder='Test' required={true} />);

    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toBeRequired();
  });

  test('textarea is not required when required prop is false', () => {
    render(<Textarea id='test' rows={3} placeholder='Test' required={false} />);

    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).not.toBeRequired();
  });

  test('textarea has correct number of rows', () => {
    render(<Textarea id='test' rows={5} placeholder='Test' required={false} />);

    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  test('textarea has correct id', () => {
    render(<Textarea id='test-textarea' rows={3} placeholder='Test' required={false} />);

    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveAttribute('id', 'test-textarea');
  });
});
