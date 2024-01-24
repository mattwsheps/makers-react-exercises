import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../src/components/Profile";

test("renders with the correct name", () => {
    const props = {
        name: "John Doe",
        job: "Software Engineer",
        birthdate: "1990-01-01",
    };
    render(<Profile {...props} />);

    expect(screen.getByRole("heading")).toHaveTextContent(props.name);
});

test("renders with the correct job description", () => {
    const props = {
        name: "John Doe",
        job: "Software Engineer",
        birthdate: "1990-01-01",
    };
    render(<Profile {...props} />);

    expect(screen.getByTestId("job")).toHaveTextContent(props.job);
});

test("renders with the correct birthdate", () => {
    const props = {
        name: "John Doe",
        job: "Software Engineer",
        birthdate: "1990-01-01",
    };
    render(<Profile {...props} />);

    expect(screen.getByTestId("birthdate")).toHaveTextContent(props.birthdate);
});
