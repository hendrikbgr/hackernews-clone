import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

const setup = () => render(<Home />);

test('renders without crashing...', () => {
    setup();
    expect(screen.getByText('New Posts')).toBeInTheDocument();
});
test('navbar links are rendering...', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Best' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'New' })).toBeInTheDocument();
});
test('links are rendering...', () => {
    setup();
    expect(screen.getByRole('link', { name: /New Posts/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Next.js/ })).toBeInTheDocument();
});
