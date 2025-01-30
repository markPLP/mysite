import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import { Button } from '../ui/button';
import ContactForm from './ContactForm';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useToast } from '../ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: 'Copied to clipboard!',
        description: text,
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        title: 'Error',
        description: 'Failed to copy',
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="scroll-mt-16 py-11 lg:py-28">
      <SectionTitle text="Let's connect!" />
      <Container className="flex gap-x-10 flex-grow gap-y-10 flex-wrap xl:gap-32 md:gap-y-16 xl:flex-nowrap">
        <article className="xl:max-w-[450px]">
          <h2 className="text-3xl mb-6">Hi there! 👋 </h2>
          <p>
            I'm a passionate frontend developer who loves crafting clean,
            intuitive, and user-friendly web experiences. Whether you’re looking
            to collaborate on a project, have questions about my work, or just
            want to say hello, feel free to reach out!
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <Button
              className="lowercase justify-start text-md py-5"
              onClick={() => handleCopy('mpclaspinas@gmail.com')}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-2">mpclaspinas@gmail.com</span>
            </Button>
            <Button
              className="lowercase justify-start text-md py-5"
              onClick={() => handleCopy('+639309804835')}
            >
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-2">+639309804835</span>
            </Button>
          </div>
        </article>
        <ContactForm className="w-full" />
      </Container>
    </section>
  );
};

export default Contact;
