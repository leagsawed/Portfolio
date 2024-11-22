'use client';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Section } from './section';

export const Contact = () => {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('Configuration EmailJS manquante');
      }

      const emailParams = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      console.log("Tentative d'envoi avec params:", emailParams);

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publicKey
      );

      if (res.status === 200) {
        toast.success('Message envoyé avec succès!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Erreur détaillée:', error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section className="flex flex-col items-center gap-4">
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-caption tracking-tight first:mt-0 text-center">
          Contact
        </h2>
      </div>

      <div className="w-full px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <div className="flex flex-col gap-2">
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full bg-muted"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full bg-muted"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              className="min-h-[100px] bg-muted"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>
      </div>
    </Section>
  );
};
