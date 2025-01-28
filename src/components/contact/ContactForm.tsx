import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import Socials from '../navbar/Socials';
import { useToast } from '../ui/use-toast';

const ContactForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();

  type HandleBlurEvent = {
    target: {
      value: string;
    };
  };

  type EmailFormElements = {
    user_name: HTMLInputElement;
    user_email: HTMLInputElement;
    message: HTMLTextAreaElement;
  };

  type EmailForm = HTMLFormElement & {
    elements: EmailFormElements;
  };

  const form = useRef<HTMLFormElement>(null);

  const [inputStates, setInputStates] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const handleFocus = (field: string) => {
    setInputStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, event: HandleBlurEvent) => {
    if (!event.target.value.trim()) {
      setInputStates((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (field: string, event: HandleBlurEvent) => {
    if (event.target.value.trim()) {
      setInputStates((prev) => ({ ...prev, [field]: true }));
    } else {
      setInputStates((prev) => ({ ...prev, [field]: false }));
    }
  };

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0ol65dl', 'template_5l1f6ld', form.current!, {
        publicKey: import.meta.env.VITE_EMAIL_SERVICE_PUBKEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast({
            title: 'Email sent successfully!',
            description: new Date().toLocaleTimeString(),
          });
          // Clear form fields
          form.current?.reset();

          // Reset input states
          setInputStates({
            user_name: false,
            user_email: false,
            message: false,
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <Card className={`p-1 lg:p-3 ${className}`}>
      <CardContent className="p-4 lg:pt-6">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3 className="mb-5">Contact me</h3>
          <fieldset className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-5 mb-3 w-full">
            <div className="relative">
              <label
                className={`absolute transform duration-500 left-4 ${
                  inputStates.user_name
                    ? 'text-primary font-bold -translate-y-1/2 bg-white'
                    : 'top-[12px]'
                }`}
              >
                Name
              </label>
              <input
                className={`bg-transparent h-12 w-full shadow-md border-2 px-3 py-2 ${
                  inputStates.user_name ? 'border-secondary' : ''
                }`}
                type="text"
                name="user_name"
                onFocus={() => handleFocus('user_name')}
                onBlur={(e) => handleBlur('user_name', e)}
                onChange={(e) => handleChange('user_name', e)}
              />
            </div>
            <div className="relative">
              <label
                className={`absolute transform duration-500  left-4 ${
                  inputStates.user_email
                    ? 'text-primary font-bold -translate-y-1/2 bg-white'
                    : 'top-[12px]'
                }`}
              >
                Email
              </label>
              <input
                className={`!bg-transparent h-12 w-full shadow-md border-2 px-5 py-2 ${
                  inputStates.user_email ? 'border-secondary' : ''
                }`}
                type="email"
                name="user_email"
                onFocus={() => handleFocus('user_email')}
                onBlur={(e) => handleBlur('user_email', e)}
                onChange={(e) => handleChange('user_email', e)}
              />
            </div>
            <div className="relative md:col-span-2">
              <label
                className={`absolute transform duration-500  left-4 ${
                  inputStates.message
                    ? 'text-primary font-bold -translate-y-1/2 bg-white'
                    : 'top-[12px]'
                }`}
              >
                Message
              </label>
              <textarea
                className={`bg-transparent w-full shadow-md border-2 px-5 py-2 ${
                  inputStates.message ? 'border-secondary' : ''
                }`}
                name="message"
                onFocus={() => handleFocus('message')}
                onBlur={(e) => handleBlur('message', e)}
                onChange={(e) => handleChange('message', e)}
                rows={5}
              />
            </div>
          </fieldset>
          <div className="relative flex items-center gap-5 justify-between">
            <Socials />
            <Button type="submit" size="lg">
              Send
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
