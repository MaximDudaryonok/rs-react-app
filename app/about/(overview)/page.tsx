import type { Metadata } from 'next';
import { AboutContent } from '@/app/src/widget/aboutContent/AboutContent.tsx';

export const metadata: Metadata = {
  title: 'About | Rick And Morty',
  description: 'About page for the Rick And Morty app by Maxim Dudaronok',
};

export default function AboutPage() {
  return <AboutContent />;
}
