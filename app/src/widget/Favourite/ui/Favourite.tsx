'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/app/src/_app/providers/themeProvider/hook';
import { useAppDispatch } from '@/app/src/shared/hooks/useAppDispatch/useAppDispatch';
import {
  clearFavourite,
  getFavourites,
} from '@/app/src/features/controlFavoriteMovies';
import { Button } from '@/app/src/shared/components/Button';
import style from './Favourite.module.scss';
import { downloadHeroesCsv } from '@/app/actions/generateHeroesCsv';
import type { FavouriteHero } from '@/app/src/features/controlFavoriteMovies/types/favoriteTypes';
import { useLanguage } from '@/app/src/_app/providers/languageProvider/LanguageContext';

export const Favourite: FC = () => {
  const { isDarkMode } = useTheme();
  const dispatch = useAppDispatch();
  const { heroes } = useSelector(getFavourites);
  const { language } = useLanguage();

  if (heroes.length === 0) return null;

  const ids = heroes.map((h: FavouriteHero) => Number(h.id));

  const handleDownload = async () => {
    const url = await downloadHeroesCsv(ids);

    window.location.href = url;
  };

  const infoText =
    language === 'en'
      ? `${heroes.length} ${heroes.length === 1 ? 'item is' : 'items are'} selected`
      : `${heroes.length} ${
          heroes.length === 1 ? 'элемент выбран' : 'элементов выбрано'
        }`;

  const clearLabel = language === 'en' ? 'Unselect all' : 'Сбросить выбор';
  const downloadLabel = language === 'en' ? 'Download' : 'Скачать';

  return (
    <div
      data-testid="favourite_block"
      className={
        isDarkMode
          ? `${style.favourite_block} ${style.favourite_block_dark}`
          : style.favourite_block
      }
    >
      <div className={style.info}>{infoText}</div>
      <div className={style.btns_wrapper}>
        <Button onClick={() => dispatch(clearFavourite())}>{clearLabel}</Button>
        <Button onClick={handleDownload}>{downloadLabel}</Button>
      </div>
    </div>
  );
};
