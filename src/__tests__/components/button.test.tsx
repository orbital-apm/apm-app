import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/ui/form/button/Button';

describe('Button component', () => {
  test('renders correctly with provided text', () => {
    const buttonText = 'Click me';
    render(<Button type="button" text={buttonText} />);

    const buttonElement = screen.getByRole('button', { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  test('onClick handler is called when button is clicked if onClick prop provided', () => {
    const onClickMock = jest.fn();
    render(<Button type="button" text="Click me" onClickFn={onClickMock} />);

    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
