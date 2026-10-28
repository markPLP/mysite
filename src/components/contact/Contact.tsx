import { Mail, Phone } from 'lucide-react';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import Reveal from '../motion/Reveal';
import { Button } from '../ui/button';
import ContactForm from './ContactForm';
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
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to copy',
        variant: 'destructive',
      });
    }
  };

  return (
    <Container className="py-20 md:py-28">
      <SectionTitle eyebrow="Contact" text="Let's connect!" />
      <div className="grid gap-10 lg:grid-cols-[2fr,3fr] lg:gap-16">
        <Reveal>
          <h3 className="mb-4 text-3xl">Hi there! 👋</h3>
          <p className="leading-relaxed">
            I'm a passionate frontend developer who loves crafting clean,
            intuitive, and user-friendly web experiences. Whether you’re looking
            to collaborate on a project, have questions about my work, or just
            want to say hello, feel free to reach out!
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="outline"
              className="justify-start normal-case"
              onClick={() => handleCopy('mpclaspinas@gmail.com')}
              aria-label="Copy email address: mpclaspinas@gmail.com"
            >
              <Mail aria-hidden="true" />
              mpclaspinas@gmail.com
            </Button>
            <Button
              variant="outline"
              className="justify-start normal-case"
              onClick={() => handleCopy('+639309804835')}
              aria-label="Copy phone number: +639309804835"
            >
              <Phone aria-hidden="true" />
              +639309804835
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Container>
  );
};

export default Contact;
