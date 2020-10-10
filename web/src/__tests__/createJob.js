import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from 'App';

test('renders header and title correctly', () => {
  render(<App />);

  const title = screen.getByText(/Post a Job for Sarvodaya Hospital/i);
  expect(title).toBeVisible();

  const jobTitle = screen.getByText(/Job Title/i);
  expect(jobTitle).toBeVisible();

  const jobTitleInput = screen.getByPlaceholderText(/eg. Register Nurse/i);
  expect(jobTitleInput).toBeVisible();
  userEvent.click(jobTitleInput);
  userEvent.type(jobTitleInput, 'title 1');
});
