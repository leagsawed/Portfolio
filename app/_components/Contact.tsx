import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Section } from './section';

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center gap-4">
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-caption tracking-tight first:mt-0 text-center">
          Contact
        </h2>
      </div>

      <div className="w-full px-6">
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nom
            </label>
            <Input
              id="name"
              placeholder="Votre nom"
              className="w-full bg-muted"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              className="w-full bg-muted"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Votre message"
              className="min-h-[100px] bg-muted"
            />
          </div>

          <Button type="submit" className="w-full">
            Envoyer le message
          </Button>
        </form>
      </div>
    </Section>
  );
};
