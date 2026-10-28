import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-base transition-colors placeholder:text-muted-foreground focus-visible:border-primary';

const ContactForm = ({ className = '' }: { className?: string }) => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_0ol65dl', 'template_5l1f6ld', form.current!, {
        publicKey: import.meta.env.VITE_EMAIL_SERVICE_PUBKEY,
      })
      .then(
        () => {
          toast({
            title: 'Email sent successfully!',
            description: new Date().toLocaleTimeString(),
          });
          form.current?.reset();
        },
        () => {
          toast({
            title: 'Message not sent',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`rounded-xl border bg-card p-6 text-card-foreground md:p-8 ${className}`}
    >
      <h3 className="mb-6 text-2xl">Contact me</h3>
      <div className="mb-6 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? 'Sending…' : 'Send'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
