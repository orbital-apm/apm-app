import React from 'react';
import { render, screen } from '@testing-library/react';
import ClickableIcon from '../../../components/ui/clickableIcon/ClickableIcon';
import FakeImg from '../../shared/assets/images/x.svg';

jest.mock('next/image', () => ({
  __esModule: true,
  default: props => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt='Test Icon' />;
  }
}));

jest.mock('next/link', () => {
  const LinkComponent = ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
  LinkComponent.displayName = 'MockedNextLink';
  return LinkComponent;
});

describe('ClickableIcon component', () => {
  const mockAltText = 'Test Icon';
  const mockLinkDest = '/test-link';

  test('icon renders correctly with provided image', () => {
    render(<ClickableIcon imgSrc={FakeImg} altText={mockAltText} linkDest={mockLinkDest} />);

    const image = screen.getByAltText(mockAltText);
    expect(image).toBeInTheDocument();
  });

  test('link destination is correct', () => {
    render(<ClickableIcon imgSrc={FakeImg} altText={mockAltText} linkDest={mockLinkDest} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockLinkDest);
  });

  test('image has correct alt text', () => {
    render(<ClickableIcon imgSrc={FakeImg} altText={mockAltText} linkDest={mockLinkDest} />);

    const image = screen.getByAltText(mockAltText);
    expect(image).toBeInTheDocument();
  });

  test('renders as a Link component', () => {
    render(<ClickableIcon imgSrc={FakeImg} altText={mockAltText} linkDest={mockLinkDest} />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  test('renders only one image', () => {
    render(<ClickableIcon imgSrc={FakeImg} altText={mockAltText} linkDest={mockLinkDest} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
  });
});
