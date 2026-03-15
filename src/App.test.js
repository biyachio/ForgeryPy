// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeryPy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeryPy/i);
    expect(titleElement).toBeInTheDocument();
});
