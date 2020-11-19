import "./mocks/matchMedia.mock";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("renders App name in header", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appName = screen.getByText(/GitHub Preview/i);
  expect(appName).toBeInTheDocument();
});

test("Renders defunkt profile on homepage", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const profileName = await screen.findAllByText(/defunkt/i);
  expect(profileName).toBeInTheDocument();
});

test("Renders hakeem profile when viewing Hakeem-star profile", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const profileName = await screen.findAllByText(/Hakeem-star/i);
  const name = await screen.findAllByText(/Hakeem Ladejobi/i);

  expect(profileName).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
