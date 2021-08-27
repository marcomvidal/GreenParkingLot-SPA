import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event';
import SpotsIndex from '../SpotsIndex';
import Spot from 'models/Spot';
import { getAll } from 'services/SpotsService';

jest.mock('services/SpotsService');

const mockedSpots: Spot[] = [
  {
    id: 1,
    label: 'A',
    car: { model: 'Viper GTS', licensePlate: 'AAA-0000', color: 'Blue' },
  },
  {
    id: 2,
    label: 'B',
    car: { model: 'NSX Type S', licensePlate: 'ZZZ-0000', color: 'White' },
  },
  {
    id: 3,
    label: 'C',
    car: undefined,
  },
];

const history = createBrowserHistory();

describe('Spots Index', () => {
  describe('when spots are registered', () => {
    beforeEach(() => {
      (getAll as jest.Mock).mockImplementation(() => mockedSpots);
      render(
        <Router history={history}>
          <SpotsIndex />
        </Router>,
      );
    });

    it('should render all spots information', () => {
      const elements = [screen.getByText('A'), screen.getByText('B'), screen.getByText('C')];

      elements.forEach(element => expect(element).toBeInTheDocument());
    });

    it('should render all cars', () => {
      const elements = [
        screen.getByText('Viper GTS'),
        screen.getByText('NSX Type S'),
        screen.getByText('This spot is empty.'),
      ];

      elements.forEach(element => expect(element).toBeInTheDocument());
    });

    it('should render all buttons', () => {
      expect(screen.getByText('Actions')).toBeInTheDocument();
      expect(screen.getAllByText('Check out').length).toBe(2);
      expect(screen.getAllByText('Check in').length).toBe(1);
    });

    it('should open form to add a new spot by menu', () => {
      userEvent.click(screen.getByText('Actions'));
      userEvent.click(screen.getByText('Add spot'));

      expect(history.location.pathname).toBe('/spots/create');
    });
  });

  describe('when there are no spots registered', () => {
    beforeEach(() => {
      (getAll as jest.Mock).mockImplementation(() => []);
      render(
        <Router history={history}>
          <SpotsIndex />
        </Router>,
      );
    });

    it('should render properly', () => {
      const element = screen.getByText('No spots registered yet.');

      expect(element).toBeInTheDocument();
    });

    it('should open form to add a new spot by button', () => {
      userEvent.click(screen.getByText('Start now'));

      expect(history.location.pathname).toBe('/spots/create');
    });
  });
});
