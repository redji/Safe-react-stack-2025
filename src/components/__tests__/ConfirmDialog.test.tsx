import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, it, expect, vi } from "vitest";

import { ConfirmDialog } from "../ConfirmDialog";
import { ThemeProvider } from "../ThemeProvider";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe("ConfirmDialog", () => {
  it("renders title and description", () => {
    render(
      <TestWrapper>
        <ConfirmDialog
          open
          title="Delete item"
          description="Are you sure?"
          onConfirm={() => {}}
          onCancel={() => {}}
        />
      </TestWrapper>,
    );
    expect(screen.getByText("Delete item")).toBeInTheDocument();
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
  });

  it("calls onCancel when cancel clicked", async () => {
    const onCancel = vi.fn();
    render(
      <TestWrapper>
        <ConfirmDialog
          open
          title="Title"
          onConfirm={() => {}}
          onCancel={onCancel}
        />
      </TestWrapper>,
    );
    await userEvent.click(screen.getByLabelText("cancel"));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when confirm clicked", async () => {
    const onConfirm = vi.fn();
    render(
      <TestWrapper>
        <ConfirmDialog
          open
          title="Title"
          onConfirm={onConfirm}
          onCancel={() => {}}
        />
      </TestWrapper>,
    );
    await userEvent.click(screen.getByLabelText("confirm"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("disables confirm when disableConfirm is true", () => {
    render(
      <TestWrapper>
        <ConfirmDialog
          open
          title="Title"
          disableConfirm
          onConfirm={() => {}}
          onCancel={() => {}}
        />
      </TestWrapper>,
    );
    expect(screen.getByLabelText("confirm")).toBeDisabled();
  });
});
