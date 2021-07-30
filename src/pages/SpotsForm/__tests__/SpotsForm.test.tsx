import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SpotsForm from "../SpotsForm";
import { save } from 'services/SpotsService';

jest.mock('services/SpotsService');

const history = createMemoryHistory({ initialEntries: ['/spots', '/spots/create'] });

describe('Spots Form', () => {
  beforeEach(() => {
    render(<Router history={history}><SpotsForm /></Router>);
  });

  it('should render the form correctly', () => {
    const elements = [
      screen.getByText('New spot'),
      screen.getByText('Label'),
      screen.getByText('Submit'),
      screen.getByText('Cancel'),
    ];

    elements.forEach((element) => expect(element).toBeInTheDocument());
  });

  describe('when form is correctly filled', () => {
    it('should submit form', () => {
      userEvent.type(screen.getByLabelText('Label'), 'A');
      userEvent.click(screen.getByText('Submit'));

      expect(save).toHaveBeenCalled();
    });
  });

  describe('when form is incorrectly filled', () => {
    it('should not submit when label is empty', () => {
      userEvent.type(screen.getByLabelText('Label'), '');
      userEvent.click(screen.getByText('Submit'));

      expect(save).not.toHaveBeenCalled();
    });

    it('should not submit when label is too long', () => {
      userEvent.type(screen.getByLabelText('Label'), '123456789');
      userEvent.click(screen.getByText('Submit'));

      expect(save).not.toHaveBeenCalled();
    });
  });

  describe('when cancel button is clicked', () => {
    it('should go back on navigation', () => {
      expect(history.location.pathname).toBe('/spots');
    });
  });
});