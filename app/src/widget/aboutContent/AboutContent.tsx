'use client';

import Link from 'next/link';
import styles from '@/app/ui/styles/pages/About.module.scss';
import { useLanguage } from '@/app/src/_app/providers/languageProvider/LanguageContext';

export function AboutContent() {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <div className={styles.container} data-testid="about-page">
      {/* Language toggle button */}
      <div className={styles.langSwitcher}>
        <button onClick={toggleLang} className={styles.langButton}>
          {language === 'en' ? 'Switch to Русский' : 'Переключить на English'}
        </button>
      </div>

      <h1 className={styles.title}>
        {language === 'en' ? 'Rick And Morty' : 'Рик и Морти'}
      </h1>

      <h3 className={styles.small}>
        {language === 'en' ? 'by Maxim Dudaryonok' : 'автор: Максим Дударёнок'}
      </h3>

      <nav className={styles.navbar}>
        <Link href="/heroes" className={styles.link}>
          {language === 'en' ? '← Back to Heroes' : '← Назад к героям'}
        </Link>
      </nav>

      <p className={styles.text}>
        {language === 'en'
          ? 'Built with React, Next.js, and TypeScript.'
          : 'Сделано с использованием React, Next.js и TypeScript.'}
      </p>

      <p className={styles.text}>
        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          RS School
        </a>
        .
      </p>
    </div>
  );
}
