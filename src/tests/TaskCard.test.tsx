import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TaskCard from "../components/TaskCard";
import { Task } from "../types/common";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockTask: Task = {
  id: 1,
  title: "Test Task",
  description: "Test Description",
  status: "To do",
  users: [],
  comments: [],
};

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

describe("TaskCard", () => {
  test("renders task title and description", () => {
    renderWithQueryClient(<TaskCard task={mockTask} onView={jest.fn()} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  // test("calls onView when view button is clicked", () => {
  //   const onView = jest.fn();
  //   renderWithQueryClient(<TaskCard task={mockTask} onView={onView} />);
  //   fireEvent.click(screen.getByText((content, element) => content.includes("View")));
  //   expect(onView).toHaveBeenCalledWith(mockTask);
  // });
});