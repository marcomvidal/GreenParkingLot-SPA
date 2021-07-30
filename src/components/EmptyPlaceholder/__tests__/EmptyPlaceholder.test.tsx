import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmptyPlaceholder from "../EmptyPlaceholder";

const action = jest.fn();

describe('Empty Placeholder', () => {
  it('should trigger action when button is pressed', () => {
    render(<EmptyPlaceholder message='No resources registered yet' onClick={action} />);

    userEvent.click(screen.getByText('Start now'));

    expect(action).toHaveBeenCalled();
  });
});
