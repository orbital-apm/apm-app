import React from 'react';
import { render, screen } from '@testing-library/react';
import FormTab from '../../../../components/ui/form/formTabs/formTab/FormTab';
import FormTabStyles from '../../../../components/ui/form/formTabs/formTab/FormTab.module.scss';
import FormTabs from '../../../../components/ui/form/formTabs/FormTabs';

jest.mock('next/link', () => {
  const LinkComponent = ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
  LinkComponent.displayName = 'MockedNextLink';
  return LinkComponent;
});

describe('FormTabs and FormTab components', () => {
  const tabs: [string, string, boolean][] = [
    ['/login', 'Login', true],
    ['/register', 'Register', false]
  ];

  test('FormTabs renders all provided tabs', () => {
    render(<FormTabs tabs={tabs} />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  test('FormTab renders provided text correctly', () => {
    render(<FormTab redirectPath='/login' text='Login' selected={true} />);

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('FormTab applies correct styling when selected', () => {
    render(<FormTab redirectPath='/login' text='Login' selected={true} />);

    const tabText = screen.getByText('Login');
    expect(tabText).toHaveClass(FormTabStyles.formTabTextSelected);
  });

  test('FormTab applies correct styling when not selected', () => {
    render(<FormTab redirectPath='/register' text='Register' selected={false} />);

    const tabText = screen.getByText('Register');
    expect(tabText).toHaveClass(FormTabStyles.formTabText);
  });

  test('FormTab link destination is correct', () => {
    render(<FormTab redirectPath='/login' text='Login' selected={true} />);

    const link = screen.getByRole('link', { name: 'Login' });
    expect(link).toHaveAttribute('href', '/login');
  });

  test('FormTabs renders correct number of tabs', () => {
    render(<FormTabs tabs={tabs} />);

    const tabElements = screen.getAllByRole('link');
    expect(tabElements).toHaveLength(tabs.length);
  });

  test('FormTabs passes correct props to FormTab', () => {
    render(<FormTabs tabs={tabs} />);

    const loginTab = screen.getByText('Login');
    const registerTab = screen.getByText('Register');

    expect(loginTab).toHaveClass(FormTabStyles.formTabTextSelected);
    expect(registerTab).not.toHaveClass(FormTabStyles.formTabTextSelected);
  });

  test('FormTab renders as a Link component', () => {
    render(<FormTab redirectPath='/login' text='Login' selected={true} />);

    const link = screen.getByRole('link', { name: 'Login' });
    expect(link).toBeInTheDocument();
  });
});
