import AnimeCard from './AnimeCard';
import styles from './ScrollableList.module.css';
import React from 'react';
import HeadingText from './HeadingText.js';
import { useEffect, useState } from 'react';

export default function TopAiring() {
  const [topAnime, SetTopAnime] = useState([]);

  const GetTopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=10');
    const data = await response.json();
    SetTopAnime(data.data);
  };
  useEffect(() => {
    GetTopAnime();

    return () => {
      GetTopAnime();
    };
  }, []);
  return (
    <>
      <HeadingText text='Top Anime' />
      <div className={styles.scrollableList}>
        {topAnime.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </>
  );
}
