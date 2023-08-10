import AnimeCard from './AnimeCard';
import styles from './ScrollableList.module.css';
import React from 'react';

export default function Recommendation({ RecData, setAnimeInfo }) {
  return (
    <div className={styles.scrollableList}>
      {RecData.map((anime) => (
        // console.log('here',anime)
        <AnimeCard
        anime={anime}
        key={anime.mal_id}
        setAnimeInfo={setAnimeInfo}
        /> 
        ))}
    </div>
  );
}
