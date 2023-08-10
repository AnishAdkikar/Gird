import styles from './AnimeTrailer.module.css'
import React from 'react'

export default function TopAiring({topAnime}) {
    return (
        <div className={styles.trailerList}>
          {topAnime.slice(0,1).map((anime) => (
            <iframe src={anime.trailer.embed_url} title='trailer'></iframe>
          ))}
        </div>
    );
}
