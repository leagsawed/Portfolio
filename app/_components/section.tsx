import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn('w-full max-w-3xl px-4 mx-auto', props.className)}>
      {props.children}
    </section>
  );
};
