import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { LINKS } from "../data/links";
import { NavigationBar } from "../components/NavigationBar";

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
