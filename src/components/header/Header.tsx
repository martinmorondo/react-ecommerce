import Head from './Head';
import Search from './Search';

const Header = () => {
  return (
    <header className="relative z-[1000] w-full bg-secondary">
      <Head />

      <div className="relative border-b border-black/5">
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-b
            from-white/[0.015]
            to-transparent
          "
          aria-hidden="true"
        />

        <Search />
      </div>
    </header>
  );
};

export default Header;