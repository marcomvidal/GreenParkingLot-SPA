import { render, screen } from "@testing-library/react";
import { APP_NAME } from "App";
import { BaseIndex } from "../BaseIndex";

describe('Base Index', () => {
  it('should render home page properly', () => {
    render(<BaseIndex />);

    const title = screen.getByText(APP_NAME);
    const carousel = screen.getByTestId('carousel');

    [title, carousel].forEach((element) => expect(element).toBeInTheDocument());
  });
});
