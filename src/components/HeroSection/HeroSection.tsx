function HeroSection({ onClickExplore }: { onClickExplore: Function }) {
  return (
    <section>
      <h2>Construindo o Futuro Digital do seu Negócio</h2>
      <a href="" onClick={(e) => {
        e.preventDefault();
        onClickExplore();
      }}>Explore Nossas Soluções</a>
      <img src="" alt="" data-testid="hero-section-background-image"/>
    </section>
  );
}

export default HeroSection;
