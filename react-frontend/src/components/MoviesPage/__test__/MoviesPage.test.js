import React from "react";
import { render, screen } from "@testing-library/react";

import MoviesPage from "../MoviesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders movies page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MoviesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("movies-datatable")).toBeInTheDocument();
    expect(screen.getByRole("movies-add-button")).toBeInTheDocument();
});
