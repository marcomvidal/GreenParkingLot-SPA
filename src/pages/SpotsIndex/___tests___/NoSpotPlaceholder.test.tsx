import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NoSpotPlaceholder } from "../components/NoSpotPlaceholder";

describe('No Spot Placeholder', () => {
  it('should trigger action when button is pressed', () => {
    const action = jest.fn();
    render(<NoSpotPlaceholder onCreateSpot={action} />);

    userEvent.click(screen.getByText('Start now'));

    expect(action).toHaveBeenCalled();
  });
});