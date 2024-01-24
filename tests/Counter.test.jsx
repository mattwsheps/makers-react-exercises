import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../src/components/Counter";

test("renders with initial value of 0 ", () => {
    render(<Counter />);

    expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2 after clicking increment button twice", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));

    expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("renders with a new value of 1 after clicking increment button three times and the decrement twice", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Decrement"));
    await userEvent.click(screen.getByText("Decrement"));

    expect(screen.getByRole("heading")).toHaveTextContent("1");
});
