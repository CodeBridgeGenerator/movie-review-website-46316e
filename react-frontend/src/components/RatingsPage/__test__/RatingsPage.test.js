import React from "react";
import { render, screen } from "@testing-library/react";

import RatingsPage from "../RatingsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders ratings page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RatingsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ratings-datatable")).toBeInTheDocument();
    expect(screen.getByRole("ratings-add-button")).toBeInTheDocument();
});
