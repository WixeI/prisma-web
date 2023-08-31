import { render, screen } from "@testing-library/react";
import Logo from ".";

describe('Logo component', () => {
  beforeEach(() => {
    render(<Logo />);
  });

  it('display logo', () => {
    const logo = screen.getByTestId("navbar-logo-image");
    expect(logo).toBeInTheDocument();
  });

  it('display company name', () => {
    const companyName = screen.getByRole('heading');
    expect(companyName).toBeInTheDocument();
  });

  it('read company name from sr only inside aria label', () => {
    const companyName = screen.getByText('Prisma Web');
    expect(companyName).toHaveClass('sr-only');
  });
});