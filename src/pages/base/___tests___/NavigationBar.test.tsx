import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { LINKS } from "../links";
import { NavigationBar } from "../NavigationBar";

describe('Navigation Bar', () => {
  it('should render all links', () => {
    render(
      <Router>
        <NavigationBar links={LINKS} />
      </Router>
    );

    const links = LINKS.map((link) => screen.getByText(link.label));
    
    links.forEach((link) => expect(link).toBeInTheDocument());
  });
});
