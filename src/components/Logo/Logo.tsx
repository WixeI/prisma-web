function Logo() {
  const logo = "https://cdn.betterttv.net/emote/5f2e77591ab9be446c4e8d9b/3x.webp";

  return (
    <h1>
      <img src={logo} alt="" data-testid="navbar-logo-image" />
      <span className="sr-only">Prisma Web</span>
    </h1>
  );
}

export default Logo;