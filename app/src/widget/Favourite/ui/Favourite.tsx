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

export const Favourite: FC = () => {
  const { isDarkMode } = useTheme();
  const dispatch = useAppDispatch();
  const { heroes } = useSelector(getFavourites);

  if (heroes.length === 0) return null;

  const ids = heroes.map((h: FavouriteHero) => Number(h.id));

  const handleDownload = async () => {
    const url = await downloadHeroesCsv(ids); // string returned

    window.location.href = url;
  };

  return (
    <div
      data-testid="favourite_block"
      className={
        isDarkMode
          ? `${style.favourite_block} ${style.favourite_block_dark}`
          : style.favourite_block
      }
    >
      <div className={style.info}>
        {heroes.length} {heroes.length === 1 ? 'item is' : 'items are'} selected
      </div>
      <div className={style.btns_wrapper}>
        <Button onClick={() => dispatch(clearFavourite())}>Unselect all</Button>
        <Button onClick={handleDownload}>Download</Button>
      </div>
    </div>
  );
};
