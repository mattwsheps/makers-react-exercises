import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recipe from "../src/components/Recipe";

describe("Test Recipe component", () => {
    test("renders with the correct title", () => {
        const props = {
            title: "Finish cinammon buns",
            type: "dessert",
            duration: 60,
        };
        render(<Recipe {...props} />);

        expect(screen.getByRole("heading")).toHaveTextContent(props.title);
    });
    test("renders with the correct type", () => {
        const props = {
            title: "Finish cinammon buns",
            type: "dessert",
            duration: 60,
        };
        render(<Recipe {...props} />);

        expect(screen.getByTestId("type")).toHaveTextContent(props.type);
    });
    test("renders with the correct duration", () => {
        const props = {
            title: "Finish cinammon buns",
            type: "dessert",
            duration: 60,
        };
        render(<Recipe {...props} />);

        expect(screen.getByTestId("duration")).toHaveTextContent(
            props.duration
        );
    });
});
