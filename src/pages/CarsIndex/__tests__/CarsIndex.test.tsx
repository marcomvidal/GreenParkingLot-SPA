import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CarsIndex from '../CarsIndex';
import CARS from '../constants/cars';
import { getAll } from 'services/CarsService';
import userEvent from '@testing-library/user-event';

jest.mock('services/CarsService');

describe('CarsIndex', () => {
  const history = createMemoryHistory({ initialEntries: ['/cars'] });

  describe('when there are cars registered', () => {
    beforeEach(() => {
      (getAll as jest.Mock).mockImplementation(() => CARS);
      render(
        <Router history={history}>
          <CarsIndex />
        </Router>,
      );
    });

    it('should the table filled', () => {
      const elements = [
        screen.getByText('Actions'),
        screen.getByText('Model'),
        screen.getByText('License Plate'),
        screen.getByText('3000 GT Twinturbo'),
        screen.getByText('AAA-0001'),
        screen.getByTestId('dot-1'),
      ];

      elements.forEach(element => expect(element).toBeInTheDocument());
    });

    it('should open modal to register a new car', () => {
      userEvent.click(screen.getByText('Actions'));
      userEvent.click(screen.getByText('Add car'));

      expect(history.location.pathname).toBe('/cars/create');
    });
  });

  describe('when there are not cars registered', () => {
    beforeEach(() => {
      (getAll as jest.Mock).mockImplementation(() => []);
      render(
        <Router history={history}>
          <CarsIndex />
        </Router>,
      );
    });

    it('should render a placeholder and a button', () => {
      const elements = [screen.getByText('No cars registered yet.'), screen.getByText('Start now')];

      elements.forEach(element => expect(element).toBeInTheDocument());
    });

    it('should open modal to register a new car', () => {
      userEvent.click(screen.getByText('Start now'));

      expect(history.location.pathname).toBe('/cars/create');
    });
  });
});
