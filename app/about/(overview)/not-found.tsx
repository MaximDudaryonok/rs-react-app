import style from '@/app/ui/styles/pages/NotFound.module.scss';
import { useLanguage } from '@/app/src/_app/providers/languageProvider/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h1 className={style.title_404}>404</h1>
      <h2 className={style.title}>
        {language === 'en' ? 'Not Found Page' : 'Страница не найдена'}
      </h2>
    </main>
  );
}
