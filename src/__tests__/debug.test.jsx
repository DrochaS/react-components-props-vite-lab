import { render } from '@testing-library/react';
import App from '../App';

test('debug app', () => {
  const { container } = render(<App />);
  console.log("Container HTML:", container.innerHTML);
  console.log(".App element:", container.querySelector('.App'));
  console.log("All divs:", container.querySelectorAll('div'));
});
