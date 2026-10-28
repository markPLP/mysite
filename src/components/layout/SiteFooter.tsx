import Socials from '../navbar/Socials';

const SiteFooter = () => {
  return (
    <footer className="border-t print:hidden">
      <div className="align-element flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mark Phillip Las Pinas. Built with React
          &amp; Tailwind.
        </p>
        <Socials />
      </div>
    </footer>
  );
};

export default SiteFooter;
