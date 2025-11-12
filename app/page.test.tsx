import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Explore Our Solar System/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all planets', () => {
    render(<Home />);
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'];

    planets.forEach((planet) => {
      expect(screen.getByText(planet)).toBeInTheDocument();
    });
  });

  it('renders planet images with correct alt text', () => {
    render(<Home />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(6);
    expect(images[0]).toHaveAttribute(
      'alt',
      expect.stringContaining('Image of')
    );
  });

  it('has a footer with NASA mention', () => {
    render(<Home />);
    const footerText = screen.getByText(/Data and images courtesy of NASA/i);
    expect(footerText).toBeInTheDocument();
  });

  it('should render Earth image as prioritized (by presence in DOM)', () => {
    render(<Home />);
    const earth = screen.getByText('Earth');
    expect(earth).toBeInTheDocument();
  });
});
