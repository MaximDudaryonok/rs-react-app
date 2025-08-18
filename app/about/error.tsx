'use client';

import { useLanguage } from '@/app/src/_app/providers/languageProvider/LanguageContext';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();

  return (
    <main>
      <h2>
        {language === 'en' ? 'Something went wrong!' : 'Что-то пошло не так!'}
      </h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>
        {language === 'en' ? 'Try again' : 'Попробовать снова'}
      </button>
    </main>
  );
}
