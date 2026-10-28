import SiteHeader from '@/components/navbar/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import HeroBanner from '@/components/hero/HeroBanner';
import About from '@/components/about/About';
import Timeline from '@/components/experience/Timeline';
import ProjectWrapper from '@/components/projects/ProjectWrapper';
import Contact from '@/components/contact/Contact';

// ids drive the nav scroll-spy and the /#hash links (see utils/data.tsx `links`).
const sections = [
  { id: 'home', label: 'Home', component: HeroBanner },
  { id: 'about', label: 'About', component: About },
  { id: 'experience', label: 'Experience', component: Timeline },
  { id: 'projects', label: 'Projects', component: ProjectWrapper },
  { id: 'contact', label: 'Contact', component: Contact },
];

const Home = () => {
  return (
    <>
      <SiteHeader />
      <main>
        {sections.map(({ id, label, component: Section }) => (
          <section key={id} id={id} aria-label={label}>
            <Section />
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
