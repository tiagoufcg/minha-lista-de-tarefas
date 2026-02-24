import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza título da aplicação', () => {
  render(<App />);
  const titulo = screen.getByText(/Minha Lista de Tarefas/i);
  expect(titulo).toBeInTheDocument();
});
