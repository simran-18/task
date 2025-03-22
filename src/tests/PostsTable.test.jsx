import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import PostsTable from "../pages/PostsTable";
import thunk from "redux-thunk"; 
// Create Mock Redux Store
const mockStore = configureStore([]);

const renderWithProviders = (ui, store) =>
  render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );

describe("PostsTable Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      posts: {
        posts: [
          { userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "Body 1" },
          { userId: 2, id: 2, title: "qui est esse", body: "Body 2" },
        ],
        selectedPost: null,
        loading: false,
        error: null,
      },
    });

    // Mock store dispatch (needed for Redux actions)
    store.dispatch = jest.fn();
  });

  test("render the PostsTable component with title Posts Dashboard", () => {
    renderWithProviders(<PostsTable />, store);
    expect(screen.getByText(/Posts Dashboard/i)).toBeInTheDocument();
  });

  test("displays loading state", () => {
    store = mockStore({ posts: { posts: [], loading: true, error: null } });
    renderWithProviders(<PostsTable />, store);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders post titles", async () => {
    renderWithProviders(<PostsTable />, store);
    expect(await screen.findByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")).toBeInTheDocument();
    expect(await screen.findByText("qui est esse")).toBeInTheDocument();
  });

  test("filters posts based on search input", async () => {
    renderWithProviders(<PostsTable />, store);
    fireEvent.change(screen.getByPlaceholderText(/Search/i), { target: { value: "qui est esse" } });

    expect(await screen.findByText("qui est esse")).toBeInTheDocument();
  });
});
