import { act, fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import CarsForm from '../CarsForm';
import { save } from 'services/CarsService';

jest.mock('services/CarsService');

describe('Cars Form', () => {
  const history = createMemoryHistory({ initialEntries: ['/cars', '/cars/create'] });

  beforeEach(() =>
    render(
      <Router history={history}>
        <CarsForm />
      </Router>,
    ),
  );

  it('should render properly', () => {
    const labelNames = ['Model', 'License Plate', 'Color'];
    const elements = [
      ...labelNames.map(label => screen.getByText(label)),
      ...labelNames.map(label => screen.getByLabelText(label)),
      ...['Cancel', 'Submit'].map(button => screen.getByText(button)),
    ];

    elements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });

  describe('when correctly filled', () => {
    it('should submit the form', async () => {
      await act(async () => {
        userEvent.type(screen.getByLabelText('Model'), 'Viper GTS');
        userEvent.type(screen.getByLabelText('License Plate'), 'AAA-0000');
        fireEvent.change(screen.getByLabelText('Color'), { target: { value: '#aaaaaa' } });
      });

      await act(async () => {
        userEvent.click(screen.getByText('Submit'));
      });

      expect(save).toHaveBeenCalled();
    });
  });

  describe('when incorrectly filled', () => {
    it('should not submit the form empty', async () => {
      await act(async () => {
        userEvent.click(screen.getByText('Submit'));
      });

      expect(save).not.toHaveBeenCalled();
    });

    it('should not submit the form with filling errors', async () => {
      await act(async () => {
        userEvent.type(screen.getByLabelText('Model'), 'A');
        userEvent.type(screen.getByLabelText('License Plate'), 'B');
        fireEvent.change(screen.getByLabelText('Color'), { target: { value: '#aaaaaa' } });
      });

      await act(async () => {
        userEvent.click(screen.getByText('Submit'));
      });

      expect(save).not.toHaveBeenCalled();
    });
  });

  describe('when cancel button is clicked', () => {
    it('should go back on navigation', () => {
      expect(history.location.pathname).toBe('/cars');
    });
  });
});
