const Logo = ({ className }) => {
  return (
    <div className={`block border-[2px] w-auto m-auto p-3 mt-8 ${className}`}>
      <span className="block font-heading font-bold text-[30px] leading-7">
        MP
      </span>
      <span className="block font-heading font-bold text-[30px] leading-7">
        LP
      </span>
    </div>
  );
};

export default Logo;
