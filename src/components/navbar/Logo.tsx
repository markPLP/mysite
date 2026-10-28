import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="MPLP — Mark Phillip, home"
      className="logo-mark flex h-11 w-11 flex-col items-center justify-center font-heading text-[15px] font-bold leading-[0.95] transition-transform hover:scale-105"
    >
      <span>MP</span>
      <span>LP</span>
    </Link>
  );
};

export default Logo;
