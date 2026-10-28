import SiteHeader from '@/components/navbar/SiteHeader';
import ResumeAside from '@/components/resume/ResumeAside';
import ResumeExperience from '@/components/resume/ResumeExperience';
import ResumeIntro from '@/components/resume/ResumeIntro';
import { usePageMeta } from '@/hooks/usePageMeta';
import { resumeData } from '@/utils/data';

const ResumePage = () => {
  const { name, role, summary, email, location, pdfUrl, skills, experience, education } =
    resumeData;

  usePageMeta('Resume', summary);

  return (
    <>
      <SiteHeader />

      <main>
        <div className="resume-page mx-auto w-full max-w-5xl px-5 py-12 md:px-8">
          <ResumeIntro
            name={name}
            role={role}
            summary={summary}
            email={email}
            location={location}
            pdfUrl={pdfUrl}
          />

          <div className="resume-grid grid gap-12 lg:grid-cols-[2fr,1fr] lg:gap-16">
            <ResumeExperience experience={experience} />
            <ResumeAside skills={skills} education={education} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumePage;
