import { render } from '@testing-library/react';
import App from '../App';

test('detailed debug of App', () => {
  const { container } = render(<App />);
  
  console.log("\n=== Full HTML ===\n");
  console.log(container.innerHTML);
  
  console.log("\n=== Query Selector Results ===\n");
  console.log(".App:", container.querySelector(".App"));
  console.log(".App header:", container.querySelector(".App header"));
  console.log(".App aside:", container.querySelector(".App aside"));
  
  console.log("\n=== All headers ===\n");
  console.log("Headers:", container.querySelectorAll("header"));
  
  console.log("\n=== All asides ===\n");
  console.log("Asides:", container.querySelectorAll("aside"));
  
  console.log("\n=== Class names of first div ===\n");
  const firstDiv = container.querySelector("div");
  console.log("First div className:", firstDiv?.className);
  console.log("First div class attribute:", firstDiv?.getAttribute("class"));
  
  // Check if there are any elements with class "App"
  const appElements = container.querySelectorAll("[class='App'], [class*='App']");
  console.log("\nElements with 'App' in class:", appElements.length);
  appElements.forEach((el, i) => {
    console.log(`Element ${i}:`, el.tagName, "class:", el.className);
  });
});
