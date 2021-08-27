import { render, screen } from '@testing-library/react';
import Dot from '../Dot';

describe('Dot', () => {
  it('should be properly rendered when default', () => {
    render(<Dot data-testid='dot' />);

    const dot = screen.getByTestId('dot');

    expect(dot).toHaveStyle(`
      height: 0.75rem;
      width: 0.75rem;
      background-color: var(--gray);
    `);
  });

  it('should be properly rendered when size is small', () => {
    render(<Dot data-testid='dot' size='sm' />);

    const dot = screen.getByTestId('dot');

    expect(dot).toHaveStyle(`
      height: 0.5rem;
      width: 0.5rem;
    `);
  });

  it('should be properly rendered background is set', () => {
    const color = '#00ff00';
    render(<Dot data-testid='dot' bg={color} />);

    const dot = screen.getByTestId('dot');

    expect(dot).toHaveStyle(`background-color: ${color};`);
  });
});
