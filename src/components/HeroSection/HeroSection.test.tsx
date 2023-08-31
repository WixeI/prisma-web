import { fireEvent, render, screen } from "@testing-library/react";
import HeroSection from ".";

const onClickExploreFunction = jest.fn();

describe('Hero Section', () => {
  beforeEach(() => {
    render(<HeroSection onClickExplore={onClickExploreFunction} />);
  });

  it('display slogan', () => {
    const slogan = screen.getByRole('heading');
    expect(slogan).toBeInTheDocument();
  });

  it('display explore our solutions anchor', () => {
    const exploreButton = screen.getByRole('link');
    expect(exploreButton).toBeInTheDocument();
  });
  
  it('execute a function when clicking in anchor', () => {
    const exploreButton = screen.getByRole('link');
    fireEvent.click(exploreButton);

    expect(onClickExploreFunction).toBeCalledTimes(1);
  });

  it('display background image', () => {
    const backgroundImage = screen.getByTestId('hero-section-background-image');
    expect(backgroundImage).toBeInTheDocument();
  });
});