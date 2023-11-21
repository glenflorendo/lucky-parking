import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateInput from "./date-input";

describe("Date Input", () => {
  const user = userEvent.setup();
  beforeEach(async () => {
    render(
      <div>
        <DateInput>From</DateInput>
        <button data-testid="outside-event-listener">Exit calendar</button>
      </div>,
    );
    const openCalendar = screen.getByTestId("date-input-trigger");
    await user.click(openCalendar);
  });

  test("renders Calendar component when clicking date input component", () => {
    expect(screen.getByTestId("calendar-input")).toBeInTheDocument();
  });

  test("clicking outside of Calendar component closes calendar", async () => {
    const exitCalendar = screen.getByTestId("outside-event-listener");
    await user.click(exitCalendar);
    expect(screen.queryByTestId("calendar-input")).not.toBeInTheDocument();
  });

  test("date input child prop works correctly - 'From' label", () => {
    expect(screen.getByText("From")).toBeInTheDocument();
  });

  test("date input placeholder text is 'mm/dd/yy'", () => {
    expect(screen.getByTestId("date-input-value")).toHaveTextContent("mm/dd/yy");
  });

  test("date input value updates when date is selected in Calendar", async () => {
    const monthOptions = screen.getByLabelText("Month");
    const yearOptions = screen.getByLabelText("Year");

    await user.click(monthOptions);
    const monthSelected = screen.getByText("January");
    await user.click(monthSelected);

    await user.click(yearOptions);
    const yearSelected = screen.getByText("2022");
    await user.click(yearSelected);

    const daySelected = screen.getByText("1");
    await user.click(daySelected);

    expect(screen.getByTestId("date-input-value")).toHaveTextContent("01/01/2022");
  });
});
