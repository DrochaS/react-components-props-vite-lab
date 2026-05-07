import { render } from '@testing-library/react';
import App from '../App';

test("renders the correct child components", () => {
  const { container } = render(<App />);
  
  // Check if .App exists
  expect(container.querySelector(".App")).toBeInTheDocument();
  
  // Check for header inside .App
  expect(container.querySelector(".App header")).toBeInTheDocument();
  
  // Check for aside inside .App
  expect(container.querySelector(".App aside")).toBeInTheDocument();
});
