'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useTheme } from '@/app/src/_app/providers/themeProvider/hook';
import { useLanguage } from '@/app/src/_app/providers/languageProvider/LanguageContext';
import {
  getLocaleStorage,
  setLocaleStorage,
} from '@/app/src/shared/utils/localeStorage/LocaleStorage';
import style from './Search.module.scss';
import { useRouter } from 'next/navigation';
import { Paths } from '@/app/src/shared/types';
import styles from '@/app/ui/styles/pages/About.module.scss';
import Link from 'next/link';

interface SearchProps {
  initialValue?: string | null;
}

const Search: FC<SearchProps> = ({ initialValue }) => {
  const { isDarkMode } = useTheme();
  const { language, setLanguage } = useLanguage();

  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const value = initialValue || getLocaleStorage() || '';

    if (value) setSearchValue(value);
  }, [initialValue]);

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocaleStorage(searchValue.trim());
    const query = new URLSearchParams({
      search: searchValue.trim(),
      page: '1',
    }).toString();

    router.push(`/${Paths.hero}?${query}`);
  };

  const handleResetForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue('');
    setLocaleStorage('');
    inputRef.current?.focus();
    const query = new URLSearchParams({ search: '', page: '1' }).toString();

    router.push(`/${Paths.hero}?${query}`);
  };

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <div className={style.search_wrapper}>
      <div className={style.langSwitcher}>
        <button type="button" onClick={toggleLang} className={style.langButton}>
          {language === 'en' ? ' Switch to Русский' : 'Переключить на English'}
        </button>
        <nav className={styles.navbar}>
          <Link href="/about" className={styles.link}>
            {language === 'en' ? ' About page' : 'О нас'}
          </Link>
        </nav>
      </div>

      <form
        className={style.search_block}
        onSubmit={handleSubmitSearch}
        onReset={handleResetForm}
      >
        <label className={style.label}>
          <input
            ref={inputRef}
            type="text"
            placeholder={language === 'en' ? 'Search...' : 'Поиск...'}
            value={searchValue}
            className={
              isDarkMode
                ? `${style.search_input} ${style.search_input_dark}`
                : style.search_input
            }
            onChange={handleChangeSearchValue}
          />
          <button
            type="reset"
            data-testid="reset"
            aria-label={language === 'en' ? 'reset' : 'сбросить'}
            className={
              searchValue
                ? `${style.clear_btn} ${style.clear_btn_visible}`
                : style.clear_btn
            }
          >
            &times;
          </button>
        </label>

        <button className={style.search_button} type="submit">
          {language === 'en' ? 'Search' : 'Найти'}
        </button>
      </form>
    </div>
  );
};

export { Search };
