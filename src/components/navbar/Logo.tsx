const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`logo block border-[2px] w-auto m-auto p-3 mt-8 ${className}`}
    >
      <span className="block font-heading font-bold text-[30px] leading-7">
        MP
      </span>
      <span className="block font-heading font-bold text-[30px] leading-7">
        LP
      </span>
      {/* <Link to="/">
        <span className="block font-heading font-bold text-[30px] leading-7">
          MP
        </span>
        <span className="block font-heading font-bold text-[30px] leading-7">
          LP
        </span>
      </Link> */}
    </div>
  );
};

export default Logo;
