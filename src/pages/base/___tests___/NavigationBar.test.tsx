import { render, screen } from "@testing-library/react";
import { NavigationBar } from "../NavigationBar";

describe('Navigation Bar', () => {
  it('should render all links', () => {
    render(<NavigationBar />);

    const links = ['Home', 'Cars'].map((link) => screen.getByText(link));
    
    links.forEach((link) => expect(link).toBeInTheDocument());
  });
});
