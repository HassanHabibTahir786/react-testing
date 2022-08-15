import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // expect(colorButton.style.color).toBe('blue');
  //expect background Color to be red
  expect(colorButton).toHaveStyle('backgroundColor: red');
  //click button
  fireEvent.click(colorButton);
  //expect background color to be blue
  expect(colorButton).toHaveStyle('backgroundColor: blue');
  //expect the button text to be changed to red
  expect(colorButton.textContent).toBe('Change to red');

});



test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out checked;

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(checkbox).not.toBeChecked();
  // click the checkbox
  fireEvent.click(checkbox);
  // expect the button to be disabled
  expect(button).toBeDisabled();
  // click the checkbox again
  fireEvent.click(checkbox);
  // expect the button to be enabled
  expect(button).toBeEnabled();
})

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});


test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
});



describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

// test("button  turns blue when clicked", () => {
//   render(<App />);
//   const colorButton = screen.getByRole('button', { name: 'Change to blue' });
//   expect(colorButton).toHaveStyle('backgroundColor: red');
// })