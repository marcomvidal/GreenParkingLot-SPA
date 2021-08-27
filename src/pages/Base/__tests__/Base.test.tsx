import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { APP_NAME } from 'App';
import Base from '../Base';
import userEvent from '@testing-library/user-event';
import LINKS from '../data/links';
import { Provider } from 'react-redux';
import store from 'store';

describe('Base', () => {
  const history = createMemoryHistory();

  beforeEach(() =>
    render(
      <Provider store={store}>
        <Router history={history}>
          <Base />
        </Router>
      </Provider>,
    ),
  );

  it('should render structure elements', () => {
    const title = screen.getByText(APP_NAME);
    const carousel = screen.getByTestId('carousel');

    [title, carousel].forEach(element => expect(element).toBeInTheDocument());
  });

  it('should render all links', () => {
    const links = LINKS.map(link => screen.getByText(link.label));

    links.forEach(link => expect(link).toBeInTheDocument());
  });

  describe('when home logo is clicked', () => {
    it('should navigate back home', () => {
      userEvent.click(screen.getByText(APP_NAME));

      expect(history.location.pathname).toBe('/');
    });
  });

  describe('when each link is clicked', () => {
    it('should navigate to the desired page', () => {
      LINKS.forEach(link => {
        userEvent.click(screen.getByText(link.label));

        expect(history.location.pathname).toBe(link.link);
      });
    });
  });
});
