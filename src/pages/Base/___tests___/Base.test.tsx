import { render, screen } from "@testing-library/react";
import { APP_NAME } from "App";
import { Base } from "../Base";

describe('Base', () => {
  it('should render properly', () => {
    render(<Base />);

    const title = screen.getByText(APP_NAME);
    const carousel = screen.getByTestId('carousel');

    [title, carousel].forEach((element) => expect(element).toBeInTheDocument());
  });
});
