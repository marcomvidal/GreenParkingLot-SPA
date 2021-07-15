import { render, screen } from "@testing-library/react";
import { BrowserRouter, useHistory } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { SpotsIndex } from "../SpotsIndex";
import { Spot } from "models/Spot";
import { getAll } from 'services/SpotsService';

jest.mock('react-router-dom', () => {
  const history = { push: jest.fn() };

  return {
    ...jest.requireActual('react-router-dom'),
    useHistory: () => history,
  };
});

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

describe('Spots Index', () => {
  describe('when spots are registered', () => {
    beforeEach(() => {
      (getAll as jest.Mock).mockImplementation(() => mockedSpots);
      render(<BrowserRouter><SpotsIndex /></BrowserRouter>);
    });

    it('should render all spots information', () => {
      const elements = [
        screen.getByText('A'),
        screen.getByText('B'),
        screen.getByText('C'),
      ];
    
      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    it('should render all cars information', () => {
      const elements = [
        screen.getByText('Viper GTS (Blue)'),
        screen.getByText('NSX Type S (White)'),
        screen.getByText('This spot is empty.'),
      ];
    
      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    it('should render all buttons', () => {
      expect(screen.getByText('Actions')).toBeInTheDocument();
      expect(screen.getAllByText('Check out').length).toBe(2);
      expect(screen.getAllByText('Check in').length).toBe(1);
    });

    it('should open form to add a new spot by menu', () => {
      userEvent.click(screen.getByText('Actions'));
      userEvent.click(screen.getByText('Add Spot'));

      expect(useHistory().push).toHaveBeenCalledWith('/spots/create');
    });
  });

  describe('when there are no spots registered', () => {
    beforeEach(() => {
      (getAll as jest.Mock).mockImplementation(() => []);
      render(<BrowserRouter><SpotsIndex /></BrowserRouter>);
    });

    it('should render properly', () => {
      const element = screen.getByText('No spots registered yet.');
    
      expect(element).toBeInTheDocument();
    });

    it('should open form to add a new spot by button', () => {
      userEvent.click(screen.getByText('Start now'));

      expect(useHistory().push).toHaveBeenCalledWith('/spots/create');
    });
  });
});
