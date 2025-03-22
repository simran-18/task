import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom"; 
import PostsTable from "../pages/PostsTable";

// Create a mock Redux store
const mockStore = configureStore([]);

// Sample test data
const mockPosts = [
  { id: 1, title: "qui est esse", userId: 1, body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla" },
  { id: 2, title: "qui et at rerum necessitatibus", userId: 2, body: "aut est omnis dolores neque rerum quod ea rerum velit pariatur beatae excepturi et provident voluptas corrupti corporis harum reprehenderit dolores eligendi" },
];


describe("PostsTable Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      posts: { posts: mockPosts, loading: false, error: null },
    });
  });

  test("renders PostsTable and displays posts", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PostsTable />
        </Provider>
      </MemoryRouter>
    );
  
    // Check if post titles are rendered
    expect(screen.getByText("qui est esse")).toBeInTheDocument();
    expect(screen.getByText("qui et at rerum necessitatibus")).toBeInTheDocument();
  });
});