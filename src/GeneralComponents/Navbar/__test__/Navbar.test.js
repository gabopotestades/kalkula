import * as ReactDOMClient from 'react-dom/client';
import { render, cleanup, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../Navbar";
import App from "../../../App";

afterEach(cleanup);

it("renders navbar correctly", () => {
    const { getByTestId } = render(<App></App>);
    const navbar = getByTestId("dti-navbar");
    const navbar_inner = getByTestId("dti-navbar-nav");
    expect(navbar).toContainElement(navbar_inner);
});