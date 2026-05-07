import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

describe("Plantsy App", () => {
  test("displays all plants on page load", async () => {
    render(<App />);
    const plantItems = await screen.findAllByTestId("plant-item");
    expect(plantItems.length).toBe(6);
  });

  test("can add a new plant", async () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Plant name"), { target: { value: "Cactus" } });
    fireEvent.change(screen.getByPlaceholderText("Image URL"), { target: { value: "cactus.jpg" } });
    fireEvent.change(screen.getByPlaceholderText("Price"), { target: { value: "5.50" } });
    fireEvent.click(screen.getByText("Add Plant"));

    const newPlant = await screen.findByText("Cactus");
    expect(newPlant).toBeInTheDocument();
  });

  test("can mark a plant as sold out", async () => {
    render(<App />);
    const buttons = await screen.findAllByText("In Stock");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveTextContent("Out of Stock");
  });

  test("can search for plants by name", async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Type a name to search..."), { target: { value: "Aloe" } });

    const aloePlant = await screen.findByText("Aloe");
    expect(aloePlant).toBeInTheDocument();
    expect(screen.queryByText("Pothos")).not.toBeInTheDocument();
  });
});
