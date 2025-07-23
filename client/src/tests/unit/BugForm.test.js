import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders form and submits data', () => {
  const onNewBug = jest.fn();
  render(<BugForm onNewBug={onNewBug} />);

  fireEvent.change(screen.getByPlaceholderText(/Bug title/i), {
    target: { value: 'Test Bug', name: 'title' }
  });

  fireEvent.submit(screen.getByRole('button'));

  expect(onNewBug).toHaveBeenCalled();
});
